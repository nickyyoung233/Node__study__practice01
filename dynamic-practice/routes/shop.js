// const path = require("path");
// const rootDir = require("../util/path");

const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (_req, res, _next) => {
  const { products } = adminData;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render("shop", {
    products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
