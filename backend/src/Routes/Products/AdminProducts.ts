import { Router, Request, Response } from "express";
import { z } from "zod";
import { CategoryModel, ProductModel } from "../../db";
import { AdminMiddleware, upload } from "../../middleware";
import { v2 as cloudinary } from "cloudinary";

const AdminProductsRouter = Router();

// ============ ZOD VALIDATION SCHEMAS ============

const createCategorySchema = z.object({
  name: z.string().min(1, "Category name is required").trim(),
  parentCategory: z.string().optional().nullable(),
});

const updateCategorySchema = z.object({
  name: z.string().min(1, "Category name is required").trim().optional(),
  parentCategory: z.string().optional().nullable(),
});

const createProductSchema = z.object({
  title: z.string().min(1, "Product title is required").trim(),
  description: z.string().min(1, "Product description is required"),
  tags: z
    .array(
      z.object({
        name: z.string().min(1, "Tag name is required").trim(),
      }),
    )
    .optional()
    .default([]),
  category: z.string().min(1, "Category is required"),
});

const updateProductSchema = z.object({
  title: z.string().min(1).trim().optional(),
  description: z.string().min(1).optional(),
  tags: z
    .array(
      z.object({
        name: z.string().min(1).trim(),
      }),
    )
    .optional(),
  category: z.string().optional(),
});

const parseTags = (value: unknown) => {
  if (value === undefined || value === null || value === "") return undefined;
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : undefined;
    } catch {
      return undefined;
    }
  }
  return undefined;
};

// ============ CATEGORY ROUTES ============

// Create Category/Group
AdminProductsRouter.post(
  "/category",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const parsed = createCategorySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten(),
        });
      }

      const { name, parentCategory } = parsed.data;

      // Check if parent category exists (if provided)
      if (parentCategory) {
        const parent = await CategoryModel.findById(parentCategory);
        if (!parent) {
          return res.status(404).json({ message: "Parent category not found" });
        }
      }

      const category = new CategoryModel({
        name,
        parentCategory: parentCategory || null,
      });

      await category.save();
      res.status(201).json({
        message: "Category created successfully",
        category,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// Get All Categories (with optional parent filter)
AdminProductsRouter.get("/category", async (req: Request, res: Response) => {
  try {
    const { parentId } = req.query;

    const filter: any = {};
    if (parentId) {
      filter.parentCategory = parentId;
    } else if (parentId === null || parentId === "null") {
      filter.parentCategory = null;
    }

    const categories = await CategoryModel.find(filter)
      .populate("parentCategory", "name")
      .sort({ createdAt: -1 });

    res.json({
      message: "Categories retrieved successfully",
      categories,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: (err as any).message,
    });
  }
});

// Get Category by ID (with nested subcategories and products)
AdminProductsRouter.get(
  "/category/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const category = await CategoryModel.findById(id).populate(
        "parentCategory",
        "name",
      );

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      // Get subcategories
      const subcategories = await CategoryModel.find({ parentCategory: id });

      // Get products in this category
      const products = await ProductModel.find({ category: id });

      res.json({
        message: "Category retrieved successfully",
        category,
        subcategories,
        products,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// Update Category
AdminProductsRouter.put(
  "/category/:id",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const parsed = updateCategorySchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten(),
        });
      }

      const { name, parentCategory } = parsed.data;

      // Check if category exists
      const category = await CategoryModel.findById(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      // Prevent setting category as its own parent
      if (parentCategory && parentCategory === id) {
        return res
          .status(400)
          .json({ message: "Category cannot be its own parent" });
      }

      // Check if parent category exists (if provided)
      if (parentCategory) {
        const parent = await CategoryModel.findById(parentCategory);
        if (!parent) {
          return res.status(404).json({ message: "Parent category not found" });
        }
      }

      // Update category
      const updatedCategory = await CategoryModel.findByIdAndUpdate(
        id,
        {
          ...(name && { name }),
          ...(parentCategory !== undefined && { parentCategory }),
        },
        { new: true },
      ).populate("parentCategory", "name");

      res.json({
        message: "Category updated successfully",
        category: updatedCategory,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// Delete Category
AdminProductsRouter.delete(
  "/category/:id",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const category = await CategoryModel.findById(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      // Check if category has subcategories
      const subcategories = await CategoryModel.find({ parentCategory: id });
      if (subcategories.length > 0) {
        return res.status(400).json({
          message:
            "Cannot delete category with subcategories. Delete subcategories first.",
        });
      }

      // Check if category has products
      const products = await ProductModel.find({ category: id });
      if (products.length > 0) {
        return res.status(400).json({
          message:
            "Cannot delete category with products. Delete or move products first.",
        });
      }

      await CategoryModel.findByIdAndDelete(id);

      res.json({ message: "Category deleted successfully" });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// ============ PRODUCT ROUTES ============

// Create Product (with image upload)
AdminProductsRouter.post(
  "/product",
  AdminMiddleware,
  upload.array("images", 10), // Allow up to 10 images
  async (req: Request, res: Response) => {
    try {
      const normalizedInput = {
        title: req.body?.title,
        description: req.body?.description,
        category: req.body?.category,
        tags: parseTags(req.body?.tags),
      };

      const parsed = createProductSchema.safeParse(normalizedInput);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten(),
        });
      }

      const { title, description, tags, category } = parsed.data;

      // Check if category exists
      const categoryExists = await CategoryModel.findById(category);
      if (!categoryExists) {
        return res.status(404).json({ message: "Category not found" });
      }

      // Get uploaded image URLs from Cloudinary
      const imageUrls =
        (req.files as Express.Multer.File[])?.map((file: any) => file.path) ||
        [];

      const product = new ProductModel({
        title,
        description,
        images: imageUrls,
        tags,
        category,
      });

      await product.save();

      const populatedProduct = await ProductModel.findById(
        product._id,
      ).populate("category", "name");

      res.status(201).json({
        message: "Product created successfully",
        product: populatedProduct,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// Get All Products (with optional category filter)
AdminProductsRouter.get("/product", async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.query;

    const filter: any = {};
    if (categoryId) {
      filter.category = categoryId;
    }

    const products = await ProductModel.find(filter)
      .populate("category", "name")
      .sort({ createdAt: -1 });

    res.json({
      message: "Products retrieved successfully",
      products,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: (err as any).message,
    });
  }
});

// Get Product by ID
AdminProductsRouter.get("/product/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await ProductModel.findById(id).populate(
      "category",
      "name",
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product retrieved successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: (err as any).message,
    });
  }
});

// Update Product
AdminProductsRouter.put(
  "/product/:id",
  AdminMiddleware,
  upload.array("images", 10),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const normalizedInput = {
        title: req.body?.title,
        description: req.body?.description,
        category: req.body?.category,
        tags: parseTags(req.body?.tags),
      };

      const parsed = updateProductSchema.safeParse(normalizedInput);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid input",
          errors: parsed.error.flatten(),
        });
      }

      const { title, description, tags, category } = parsed.data;

      // Check if product exists
      const product = await ProductModel.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Check if new category exists (if provided)
      if (category) {
        const categoryExists = await CategoryModel.findById(category);
        if (!categoryExists) {
          return res.status(404).json({ message: "Category not found" });
        }
      }

      // Get new uploaded image URLs
      const newImageUrls =
        (req.files as Express.Multer.File[])?.map((file: any) => file.path) ||
        [];

      // Combine existing images with new ones
      const updatedImages =
        newImageUrls.length > 0
          ? [...product.images, ...newImageUrls]
          : product.images;

      // Update product
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        {
          ...(title && { title }),
          ...(description && { description }),
          ...(tags && { tags }),
          ...(category && { category }),
          images: updatedImages,
        },
        { new: true },
      ).populate("category", "name");

      res.json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

// Delete Product (with Cloudinary cleanup)
AdminProductsRouter.delete(
  "/product/:id",
  AdminMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const product = await ProductModel.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Delete images from Cloudinary
      if (product.images && product.images.length > 0) {
        for (const imageUrl of product.images) {
          try {
            // Extract public_id from Cloudinary URL
            const publicId = imageUrl
              .split("/")
              .slice(-2)
              .join("/")
              .split(".")[0];
            await cloudinary.uploader.destroy(publicId);
          } catch (error) {
            console.error("Error deleting image from Cloudinary:", error);
          }
        }
      }

      await ProductModel.findByIdAndDelete(id);

      res.json({ message: "Product deleted successfully" });
    } catch (err) {
      res.status(500).json({
        message: "Server error",
        error: (err as any).message,
      });
    }
  },
);

export { AdminProductsRouter };
