const { Book } = require("../models");

const getAllBooks = async (req, res) => {
  try {
    const data = await Book.findAll();
    const result = {
      status: 200,
      message: "Books fetched successfully",
      data: data,
    };
    res.status(200).json(result);
  } catch {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findByPk(id);
    const result = {
      status: 200,
      message: "Book fetched successfully",
      data: data,
    };
    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "Book not found",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

const createBook = async (req, res) => {
  const { title, description } = req.body;
  try {
    const data = await Book.create({ title, description });
    const result = {
      status: 201,
      message: "Book created successfully",
      data: data,
    };
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const data = await Book.findByPk(id);
    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "Book not found",
      });
    }
    const updatedData = await data.update({ title, description });
    const result = {
      status: 200,
      message: "Book updated successfully",
      data: updatedData,
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Book.findByPk(id);
    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "Book not found",
      });
    }
    await data.destroy();
    const result = {
      status: 200,
      message: "Book deleted successfully",
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
