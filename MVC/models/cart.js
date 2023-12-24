const fs = require("fs");
const path = require("path");
const _path = path.join(process.cwd(), "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, price) {
    //获取前置products
    fs.readFile(_path, (err, content) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(content);
      }
      //添加新product / 增加数量
      const productId = cart.products.findIndex((item) => item.id === id);
      let newProduct;
      if (productId !== -1) {
        newProduct = { ...cart.products[productId] };
        newProduct.quantity += 1;
        cart.products[productId] = newProduct;
      } else {
        newProduct = { id, quantity: 1, price };
        cart.products = [...cart.products, newProduct];
      }
      cart.totalPrice += +price;
      fs.writeFile(_path, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
