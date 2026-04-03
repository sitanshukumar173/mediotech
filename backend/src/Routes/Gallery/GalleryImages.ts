import { Request, Response, Router } from "express";
import { GalleryImageModel } from "../../db";
import { AdminMiddleware, upload } from "../../middleware";
import { v2 as cloudinary } from "cloudinary";

const AdminGalleryRouter = Router();
const PublicGalleryRouter = Router();

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

PublicGalleryRouter.get(
  "/gallery-images",
  async (_req: Request, res: Response) => {
    try {
      const images = await GalleryImageModel.find().sort({ createdAt: -1 });
      res.json({ message: "Gallery images retrieved successfully", images });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

AdminGalleryRouter.get(
  "/gallery-images",
  AdminMiddleware,
  async (_req: Request, res: Response) => {
    try {
      const images = await GalleryImageModel.find().sort({ createdAt: -1 });
      res.json({ message: "Gallery images retrieved successfully", images });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

AdminGalleryRouter.post(
  "/gallery-images",
  AdminMiddleware,
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Gallery image is required" });
      }

      const image = (req.file as Express.Multer.File & { path?: string }).path;
      if (!image) {
        return res.status(400).json({ message: "Uploaded image path missing" });
      }

      const galleryImage = new GalleryImageModel({ image });
      await galleryImage.save();

      res.status(201).json({
        message: "Gallery image uploaded successfully",
        image: galleryImage,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

AdminGalleryRouter.delete(
  "/gallery-images/:id",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const imageDoc = await GalleryImageModel.findById(id);
      if (!imageDoc) {
        return res.status(404).json({ message: "Gallery image not found" });
      }

      const publicId = getCloudinaryPublicId(imageDoc.image);
      if (publicId) {
        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (error) {
          console.error("Error deleting gallery image from Cloudinary:", error);
        }
      }

      await GalleryImageModel.findByIdAndDelete(id);
      res.json({ message: "Gallery image deleted successfully" });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as Error).message,
      });
    }
  },
);

export { AdminGalleryRouter, PublicGalleryRouter };
