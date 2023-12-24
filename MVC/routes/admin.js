const express = require("express");

const {
  getAddProduct,
  postAddProduct,
  getEditProduct,
  getAdminProducts,
} = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", getAddProduct);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

router.get("/edit-product/:productId", getEditProduct);

router.get("/products", getAdminProducts);

module.exports = router;
