exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Index",
    path: "/",
    activeShop: true,
    productCSS: true,
  });
};
