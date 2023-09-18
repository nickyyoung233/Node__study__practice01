const express = require("express");

const { getIndex } = require("../controllers/index");
const { getProducts } = require("../controllers/products");
const { getCart } = require("../controllers/cart");

const router = express.Router();

router.get("/products", getProducts);
router.get("/cart", getCart);
router.get("/", getIndex);

module.exports = router;
