import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});