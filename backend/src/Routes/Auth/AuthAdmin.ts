import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { z } from "zod";
import { AdminModel } from "../../db";
import { AdminMiddleware } from "../../middleware";

const AuthAdminRouter = Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

const loginSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().min(6, "Password is required"),
});

const createAdminSchema = z
  .object({
    AdminName: z.string().min(2).optional(),
    adminName: z.string().min(2).optional(),
    email: z.string().trim().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.AdminName || data.adminName, {
    message: "Admin name is required",
    path: ["AdminName"],
  })
  .transform((data) => ({
    AdminName: data.AdminName ?? data.adminName!,
    email: data.email,
    password: data.password,
  }));

interface CustomRequest extends Request {
  adminId?: string;
}

//admin login  rout
AuthAdminRouter.post("/login", async (req: CustomRequest, res: Response) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid input",
        errors: parsed.error.flatten(),
      });
    }

    const { email, password } = parsed.data;

    const admin = await AdminModel.findOne({ email });

    if (!admin)
      return res.status(401).json({ message: "Admin does not exist" });

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, JWT_SECRET);

    res.json({ message: "Login successful", token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server error", error: (err as any).message });
  }
});

// Get current admin info
AuthAdminRouter.get("/me", AdminMiddleware, async (req: any, res: Response) => {
  try {
    const admin = await AdminModel.findById(req.adminId);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.json({ AdminName: admin.AdminName, email: admin.email });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server error", error: (err as any).message });
  }
});

//route that protects & create new admin , only logged-in admin can create new admin (as using AdminMiddleaware)
AuthAdminRouter.post(
  "/create",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const parsed = createAdminSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten(),
        });
      }

      const { AdminName, email, password } = parsed.data;

      const existing = await AdminModel.findOne({ email });
      if (existing)
        return res.status(400).json({ message: "Admin already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newAdmin = new AdminModel({
        AdminName,
        email,
        password: hashedPassword,
      });

      await newAdmin.save();
      res.status(201).json({ message: "New admin created" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Server error", error: (err as any).message });
    }
  },
);

export { AuthAdminRouter };
