const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`This is a ${req.protocol} ${req.method} ${req.url}`);
  next();
});

module.exports = router;
