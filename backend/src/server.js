import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import deepseekRoutes from "./deepseek.route.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/deepseek", deepseekRoutes);

app.listen(process.env.PORT, () => {
  console.log(`DeepSeek BE running on ${process.env.PORT}`);
});
