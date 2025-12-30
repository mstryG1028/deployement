import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.get("/api/message", (req, res) => {
    console.log("hell01")
  res.json({ message: "hello" });
});

const PORT = 4000;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`running at:${PORT}`);
});
