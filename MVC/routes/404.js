const express = require("express");

const { fault } = require("../controllers/fault");

const router = express.Router();

router.use("/", fault);

module.exports = router;
