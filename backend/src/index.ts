import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { AuthAdminRouter } from "./Routes/Auth/AuthAdmin";
import { AdminProductsRouter } from "./Routes/Products/AdminProducts";
import { ContactRouter } from "./Routes/Contact/Contact";
import { DemoRequestRouter } from "./Routes/Demo/DemoRequest";

dotenv.config();

const app = express();

// Enable CORS for frontend (support Vite ports 5173/5174)
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "http://localhost:5174",
  "https://mediotech.pages.dev/",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json());
const port = Number(process.env.PORT) || 3000;

//connect to DB
const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(" Connection Failed:", err);
    process.exit(1);
  }
};

//ROUTES
app.use("/hello", (req, res) => {
  console.log("hello world");
  res.send("Hello World");
});

// Admin auth routes
app.use("/admin", AuthAdminRouter);

// Admin products routes
app.use("/admin", AdminProductsRouter);

// Contact routes
app.use("/", ContactRouter);

// Demo request routes
app.use("/", DemoRequestRouter);

async function startServer() {
  await connectDb();

  const server = app.listen(port, "0.0.0.0", () => {
    const address = server.address();
    console.log(
      `Server is running at http://0.0.0.0:${typeof address === "object" && address ? address.port : port}`,
    );
  });

  server.on("error", (err) => {
    console.error("Server error:", err);
  });
}

startServer().catch((err) => {
  console.error("Startup error:", err);
  process.exit(1);
});

export default app;
