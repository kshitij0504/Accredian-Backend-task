import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅ Successfully connected to the database!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

connectDB();
