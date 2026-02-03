import jwt, { type JwtPayload } from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

function AdminMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const headerToken = authHeader?.toString().startsWith("Bearer ")
    ? authHeader.toString().split(" ")[1]
    : authHeader?.toString();
  const token =
    headerToken ||
    (req.headers["x-access-token"] as string | undefined) ||
    (req.query.token as string | undefined) ||
    (req.body?.token as string | undefined);

  if (!token) {
    return res.status(401).json({ message: "token missing" });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT_SECRET missing" });
  }
  try {
    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as CustomJwtPayload;
    (req as any).adminId = decode.id;
    next();
  } catch (error: any) {
    return res.status(403).json({
      message: "You are not logged in!",
      error: error.message,
    });
  }
}

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer to use Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "EHM-APP",
    allowed_formats: ["jpg", "png", "jpeg", "gif"],
  } as { folder: string; allowed_formats: string[] },
});

const upload = multer({ storage: storage });

export { AdminMiddleware, upload };
