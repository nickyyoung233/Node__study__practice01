const express = require("express");

const {
  getAddProduct,
  postAddProduct,
  getAdminProducts,
} = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", getAddProduct);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

router.get("/products", getAdminProducts);

module.exports = router;
