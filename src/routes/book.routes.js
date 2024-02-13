import { Router } from "express";
import {
  addBook,
  getBookDetails,
  getBooks,
} from "../controllers/book.controller.js";

const router = Router();

router.route("/books").get(getBooks);
router.route("/book-details").get(getBookDetails);
router.route("/add-book").post(addBook);

export default router;
