import mongoose, { model, Schema, Types } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//admin-info Type
interface AdminType {
  AdminName: string;
  email: string;
  password: string;
}

//admin info schema
const AdminSchema = new Schema<AdminType>({
  AdminName: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Category/Group Type (hierarchical structure)
interface CategoryType {
  name: string;
  parentCategory?: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

// Category Schema (can have nested categories)
const CategorySchema = new Schema<CategoryType>(
  {
    name: { type: String, required: true, trim: true },
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  { timestamps: true },
);

// Product Tag Type
interface ProductTagType {
  name: string;
}

// Product Type
interface ProductType {
  title: string;
  description: string; // Rich text with formatting
  images: string[]; // Cloudinary URLs
  tags: ProductTagType[];
  category: Types.ObjectId; // Reference to Category
  createdAt: Date;
  updatedAt: Date;
}

// Contact Type
interface ContactType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hospital: string;
  facilityType: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

// Demo Request Type
interface DemoRequestType {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  city: string;
  state: string;
  productInterest?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

// Product Schema
const ProductSchema = new Schema<ProductType>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    tags: [
      {
        name: { type: String, required: true, trim: true },
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true },
);

// Contact Schema
const ContactSchema = new Schema<ContactType>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    hospital: { type: String, required: true, trim: true },
    facilityType: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

// Demo Request Schema
const DemoRequestSchema = new Schema<DemoRequestType>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    organization: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    productInterest: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

//EXPORTS
export const AdminModel = model<AdminType>(
  "admin_info",
  AdminSchema,
  "admin_info",
);

export const CategoryModel = model<CategoryType>("Category", CategorySchema);

export const ProductModel = model<ProductType>("Product", ProductSchema);

export const ContactModel = model<ContactType>("Contact", ContactSchema);

export const DemoRequestModel = model<DemoRequestType>(
  "DemoRequest",
  DemoRequestSchema,
);
