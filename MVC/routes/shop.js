const express = require("express");

const {
  getIndex,
  getProducts,
  getCart,
  postCart,
  getCheckOut,
  getOrders,
  getDetail,
} = require("../controllers/shop");

const router = express.Router();

router.get("/products", getProducts);
router.get("/details/:productId", getDetail);
router.get("/cart", getCart);
router.post("/cart", postCart);
router.get("/checkout", getCheckOut);
router.get("/orders", getOrders);
router.get("/", getIndex);

module.exports = router;
