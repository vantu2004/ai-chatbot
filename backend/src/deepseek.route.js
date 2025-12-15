import express from "express";
import { sendMessage } from "./deepseek.controller.js";

const router = express.Router();

router.post("/message", sendMessage);

export default router;
