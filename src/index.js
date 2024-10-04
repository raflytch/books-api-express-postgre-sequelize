require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

app.use(express.json());

app.use("/books", booksRouter);

// GET request
app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hello this is the root",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
