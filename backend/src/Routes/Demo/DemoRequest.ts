import { Router, Request, Response } from "express";
import { z } from "zod";
import { DemoRequestModel } from "../../db";
import { AdminMiddleware } from "../../middleware";

const DemoRequestRouter = Router();

const createDemoRequestSchema = z.object({
  fullName: z.string().min(1, "Full name is required").trim(),
  email: z.string().email("Valid email is required").trim(),
  phone: z.string().min(6, "Phone is required").trim(),
  organization: z.string().min(1, "Organization is required").trim(),
  designation: z.string().min(1, "Designation is required").trim(),
  city: z.string().min(1, "City is required").trim(),
  state: z.string().min(1, "State is required").trim(),
  productInterest: z.string().trim().optional(),
  message: z.string().min(1, "Message is required").trim(),
});

// Public: Create demo request
DemoRequestRouter.post("/demo", async (req: Request, res: Response) => {
  try {
    const parsed = createDemoRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid input",
        errors: parsed.error.flatten(),
      });
    }

    const demoRequest = new DemoRequestModel(parsed.data);
    await demoRequest.save();

    return res.status(201).json({
      message: "Demo request submitted successfully",
      demoRequest,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
      error: (err as any).message,
    });
  }
});

// Admin: List all demo requests
DemoRequestRouter.get(
  "/admin/demo",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const demoRequests = await DemoRequestModel.find().sort({
        createdAt: -1,
      });
      return res.json({
        message: "Demo requests retrieved successfully",
        demoRequests,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// Admin: Get demo request by id
DemoRequestRouter.get(
  "/admin/demo/:id",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const demoRequest = await DemoRequestModel.findById(id);
      if (!demoRequest) {
        return res.status(404).json({ message: "Demo request not found" });
      }
      return res.json({
        message: "Demo request retrieved successfully",
        demoRequest,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

export { DemoRequestRouter };
