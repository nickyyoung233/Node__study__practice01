// const path = require("path");
// const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (_req, res, _next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeProduct: true,
    formsCSS: true,
    productCSS: true
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, _next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
