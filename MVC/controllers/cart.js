exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
    activeShop: true,
    productCSS: true,
  });
};
