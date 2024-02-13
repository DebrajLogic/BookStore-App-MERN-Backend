import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bookRouter from "./src/routes/book.routes.js";
import userRouter from "./src/routes/user.routes.js";
import connectDB from "./src/db/index.js";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "All Ok" });
});

connectDB();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/v1", bookRouter);
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
