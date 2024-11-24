import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});