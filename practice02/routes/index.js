const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require("../utils/path");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/users", (req, res, next) => {
  console.log("hi,users");
  res.sendFile(path.join(rootDir, "views", "user.html"));
});
router.post("/", (req, res, next) => {
  console.log(req.body.username);
  res.sendFile(path.join(rootDir, "views", "index.html"));
});
router.use("/", (req, res, next) => {
  console.log("hi");
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = router;
