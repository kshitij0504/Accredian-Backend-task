import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import referralRoutes from "./routes/referralRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use("/api", referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
