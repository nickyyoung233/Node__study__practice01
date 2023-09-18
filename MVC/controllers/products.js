const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  new Product({ t: req.body.title, p: req.body.price }).store();
  res.redirect("/products");
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop/product-list", {
    prods: products,
    pageTitle: "Shop",
    path: "/products",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

exports.getAdminProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("admin/product-list", {
    prods: products,
    pageTitle: "Shop",
    path: "/admin/products",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
