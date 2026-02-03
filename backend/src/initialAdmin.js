//run once at satrt to manually craete initial admin in database
require("ts-node/register/transpile-only");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { AdminModel } = require("./db");

dotenv.config();

const initialAdminSchema = z.object({
  AdminName: z.string().min(2, "Admin name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

//creates manually initial admin in database
async function createInitialAdmin() {
  await connectDB();

  const adminInput = {
    AdminName: process.env.ADMIN_NAME || "sitanshu", //admin name
    email: process.env.ADMIN_EMAIL || "kumarsubh771@gmail.com", //admin email
    password: process.env.ADMIN_PASSWORD || "MEDIOTECH@123", //plain password
  };

  //email
  const existing = await AdminModel.findOne({
    email: adminInput.email,
  });

  if (existing) {
    if (process.env.RESET_ADMIN === "true") {
      const parsedExisting = initialAdminSchema.safeParse(adminInput);
      if (!parsedExisting.success) {
        console.error(
          "Invalid initial admin data:",
          parsedExisting.error.flatten(),
        );
        await mongoose.disconnect();
        process.exit(1);
      }

      const hashedPassword = await bcrypt.hash(
        parsedExisting.data.password,
        10,
      );
      existing.AdminName = parsedExisting.data.AdminName;
      existing.password = hashedPassword;
      await existing.save();
      console.log("Admin updated successfully");
      await mongoose.disconnect();
      return;
    }

    console.log("Admin already exists");
    await mongoose.disconnect();
    return;
  }

  const parsed = initialAdminSchema.safeParse(adminInput);
  if (!parsed.success) {
    console.error("Invalid initial admin data:", parsed.error.flatten());
    await mongoose.disconnect();
    process.exit(1);
  }

  //password
  const hashedPassword = await bcrypt.hash(parsed.data.password, 10);

  const admin = new AdminModel({
    AdminName: parsed.data.AdminName,
    email: parsed.data.email,
    password: hashedPassword, //hassed password
  });

  await admin.save();

  mongoose.disconnect();
}

async function connectDB() {
  try {
    const uri =
      process.env.MONGO_URI ||
      "mongodb+srv://sitanshu218110:SITANSHUsubh130012@cluster0.xynicpk.mongodb.net/MedioTech";
    await mongoose.connect(uri);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
}

createInitialAdmin();
