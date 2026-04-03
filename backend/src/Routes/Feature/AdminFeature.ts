import { Request, Response, Router } from "express";
import { z } from "zod";
import { FeatureModel } from "../../db";
import { AdminMiddleware, upload } from "../../middleware";
import { v2 as cloudinary } from "cloudinary";

const FeatureRouter = Router();

const createFeatureSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
  description: z.string().min(1, "Description is required").trim(),
  link: z.string().min(1, "Link is required").trim(),
});

const updateFeatureSchema = z.object({
  title: z.string().min(1, "Title cannot be empty").trim().optional(),
  description: z
    .string()
    .min(1, "Description cannot be empty")
    .trim()
    .optional(),
  link: z.string().min(1, "Link cannot be empty").trim().optional(),
});

const getCloudinaryPublicId = (imageUrl: string): string | null => {
  try {
    const uploadSegment = "/upload/";
    const uploadIndex = imageUrl.indexOf(uploadSegment);
    if (uploadIndex === -1) return null;

    const afterUpload = imageUrl.slice(uploadIndex + uploadSegment.length);
    const withoutVersion = afterUpload.replace(/^v\d+\//, "");
    return withoutVersion.replace(/\.[^.]+$/, "");
  } catch {
    return null;
  }
};

FeatureRouter.get("/feature", async (_req: Request, res: Response) => {
  try {
    const features = await FeatureModel.find().sort({ createdAt: -1 });
    res.json({ message: "Features retrieved successfully", features });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: (err as Error).message,
    });
  }
});

FeatureRouter.get(
  "/admin/feature",
  AdminMiddleware,
  async (_req: Request, res: Response) => {
    try {
      const features = await FeatureModel.find().sort({ createdAt: -1 });
      res.json({ message: "Features retrieved successfully", features });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

FeatureRouter.post(
  "/admin/feature",
  AdminMiddleware,
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      const parsed = createFeatureSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten(),
        });
      }

      if (!req.file) {
        return res.status(400).json({ message: "Feature image is required" });
      }

      const feature = new FeatureModel({
        ...parsed.data,
        image: (req.file as Express.Multer.File & { path?: string }).path,
      });

      await feature.save();

      res.status(201).json({
        message: "Feature created successfully",
        feature,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

FeatureRouter.put(
  "/admin/feature/:id",
  AdminMiddleware,
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const parsed = updateFeatureSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten(),
        });
      }

      const feature = await FeatureModel.findById(id);
      if (!feature) {
        return res.status(404).json({ message: "Feature not found" });
      }

      let image = feature.image;
      if (req.file) {
        const oldPublicId = getCloudinaryPublicId(feature.image);
        if (oldPublicId) {
          try {
            await cloudinary.uploader.destroy(oldPublicId);
          } catch (error) {
            console.error("Error deleting old feature image:", error);
          }
        }
        image =
          (req.file as Express.Multer.File & { path?: string }).path ||
          feature.image;
      }

      const updatedFeature = await FeatureModel.findByIdAndUpdate(
        id,
        {
          ...parsed.data,
          image,
        },
        { new: true },
      );

      res.json({
        message: "Feature updated successfully",
        feature: updatedFeature,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

FeatureRouter.delete(
  "/admin/feature/:id",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const feature = await FeatureModel.findById(id);
      if (!feature) {
        return res.status(404).json({ message: "Feature not found" });
      }

      const publicId = getCloudinaryPublicId(feature.image);
      if (publicId) {
        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (error) {
          console.error("Error deleting feature image from Cloudinary:", error);
        }
      }

      await FeatureModel.findByIdAndDelete(id);

      res.json({ message: "Feature deleted successfully" });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

export { FeatureRouter };
