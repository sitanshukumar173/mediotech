import { Router, Request, Response } from "express";
import { z } from "zod";
import { ContactModel } from "../../db";
import { AdminMiddleware } from "../../middleware";

const ContactRouter = Router();

const createContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z.string().email("Valid email is required").trim(),
  phone: z.string().min(6, "Phone is required").trim(),
  hospital: z.string().min(1, "Hospital/Institution is required").trim(),
  facilityType: z.string().min(1, "Facility type is required").trim(),
  message: z.string().min(1, "Message is required").trim(),
});

// Public: Create contact request
ContactRouter.post("/contact", async (req: Request, res: Response) => {
  try {
    const parsed = createContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid input",
        errors: parsed.error.flatten(),
      });
    }

    const contact = new ContactModel(parsed.data);
    await contact.save();

    return res.status(201).json({
      message: "Contact request submitted successfully",
      contact,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
      error: (err as any).message,
    });
  }
});

// Admin: List all contact requests
ContactRouter.get(
  "/admin/contact",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const contacts = await ContactModel.find().sort({ createdAt: -1 });
      return res.json({
        message: "Contacts retrieved successfully",
        contacts,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// Admin: Get contact by id
ContactRouter.get(
  "/admin/contact/:id",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const contact = await ContactModel.findById(id);
      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }
      return res.json({
        message: "Contact retrieved successfully",
        contact,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

export { ContactRouter };
