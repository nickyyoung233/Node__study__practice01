const Product = require("../models/product");
const Cart = require("../models/cart");
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
exports.getDetail = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id).then((product) => {
    res.render("shop/product-detail", {
      pageTitle: "Details",
      path: "/detail",
      productCSS: true,
      product: product,
    });
  });
};
exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Index",
    path: "/",
    productCSS: true,
  });
};
exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
    productCSS: true,
  });
};
exports.postCart = (req, res, next) => {
  Cart.addProduct(req.body.productId, req.body.productPrice);
  // res.render("shop/cart", {
  //   pageTitle: "Cart",
  //   path: "/cart",
  //   productCSS: true,
  //   // cart: cart,
  // });
  res.redirect("/cart");
};
exports.getCheckOut = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "CheckOut",
    path: "/checkout",
    productCSS: true,
  });
};
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
    productCSS: true,
  });
};
