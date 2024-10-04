const express = require("express");
const router = express.Router();
const booksController = require("../controller/books");

router.get("/", booksController.getAllBooks);

router.get("/:id", booksController.getBookById);

router.post("/", booksController.createBook);

module.exports = router;
