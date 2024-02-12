import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bookRouter from "./src/routes/book.routes.js";
import connectDB from "./src/db/index.js";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "All Ok" });
});

connectDB();

app.use(cors({
  origin: ['https://book-store-app-mern-frontend.vercel.app/],
  methods:['GET','POST'));
app.use(express.json());
app.use("/api/v1", bookRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
