import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
  cor({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.post("/api/deepseek", async (req, res) => {
  try {
    const response = await fetch("https://api.deepseek.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        ...req.body,
        stream: true,
      }),
    });

    // ⚠️ Stream thẳng về FE
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of response.body) {
      res.write(chunk);
    }

    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`DeepSeek BE running on ${process.env.PORT}`);
});
