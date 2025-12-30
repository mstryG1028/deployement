// import express from "express";
// import cors from "cors";
// const app = express();

// app.use(express.json());
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5174",
//       "http://localhost:5173",
//       "http://localhost:3000",
//     ],
//     credentials: true,
//   })
// );

// app.get("/api/message", (req, res) => {
//     console.log("hell01")
//   res.json({ message: "hello" });
// });
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../client/dist/index.html")
//   );
// });

// const PORT = 4000;
// app.listen(PORT,"0.0.0.0", () => { // iska use hum port
//     //binding me konsa bhi port use kar sakte hai
//   console.log(`running at:${PORT}`);
// });

import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from server" });
});

// Serve React build
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/dist/index.html")
  );
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
