import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("Please provide MONGODB_URI in the .env file");
}

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("MongoDB is failed", error);
    process.exit(1);
  }
}

export default connectDB;
