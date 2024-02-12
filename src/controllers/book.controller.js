import { Book } from "../models/book.models.js";

export const getBooks = async (_, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    console.log("Error fetching all books", error);
  }
};

export const addBook = async (req, res) => {
  const { title, description, image, ratings, originalPrice, price, author } =
    req.body;

  console.log("req.body = ", req.body);

  try {
    const book = await Book.create({
      title,
      description,
      image,
      ratings,
      originalPrice,
      price,
      author,
    });

    return res
      .status(200)
      .json({ book, message: "Book Added to Database Successfully!" });
  } catch (error) {
    console.log("Error adding book to database", error);
  }

  res.status(200).json({ book, response: "Book Added Successfully!" });
};
