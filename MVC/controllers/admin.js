const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};
exports.postAddProduct = (req, res, next) => {
  const defaultUrl =
    "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80";
  new Product({
    title: req.body.title,
    price: req.body.price,
    imgUrl: req.body.imgUrl === "" ? defaultUrl : req.body.imgUrl,
    des: req.body.des,
  }).store();
  res.redirect("/products");
};

exports.getEditProduct = (req, res, next) => {
  Product.findById(req.params.productId).then((product) => {
    console.log(product);
    res.render("admin/edit-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      product: product,
    });
  });
};
exports.getAdminProducts = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("admin/product-list", {
    prods: products,
    pageTitle: "Admin Shop",
    path: "/admin/products",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
