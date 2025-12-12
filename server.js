import express from "express";
import AuthRouter from "./routes/auth.route.js";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api/auth", AuthRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
