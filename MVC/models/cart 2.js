const fs = require("fs");
const path = require("path");
const _path = path.join(process.cwd(), "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, price) {
    //fetch the previous cart
    fs.readFile(_path, (err, content) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(content);
      }
      //add new product/ increase
      const product = cart.products.find((item) => item.id === id);
      let newProduct;
      if (product && product.quantity) {
        newProduct = { ...product };
        newProduct.quantity += 1;
      } else {
        newProduct = { id, quantity: 1 };
      }
      cart.totalPrice += price;
      cart.products = [...cart.products, newProduct];
      fs.writeFile(_path, JSON.stringify(cart));
    });
  }
};
