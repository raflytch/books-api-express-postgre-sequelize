const books = [
  {
    id: 1,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
  {
    id: 2,
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
  },
  {
    id: 3,
    name: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
  },
  {
    id: 4,
    name: "The Two Towers",
    author: "J.R.R. Tolkien",
  },
  {
    id: 5,

    name: "The Return of the King",
    author: "J.R.R. Tolkien",
  },
];

const getAllBooks = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hello World",
    data: books,
  });
};

const getBookById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    status: 200,
    message: `Hello this is the book ${id}`,
    data: books[id - 1],
  });
};

const createBook = (req, res) => {
  const { body } = req;
  books.push({
    id: books.length + 1,
    ...body,
  });
  res.status(201).json({
    status: 201,
    message: "Book created successfully",
    data: books,
  });

  console.log(books.length);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};
