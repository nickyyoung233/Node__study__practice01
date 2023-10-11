const fs = require("fs");
const path = require("path");
const _path = path.join(process.cwd(), "data", "cart.json");

const getCartFromFile = () => {
  let cart = [];
  cart = fs.readFileSync(_path);
  if (cart != null) {
    return JSON.parse(cart);
  }
  return [];
};

module.exports = class Cart {
  constructor({ title, imgUrl, price, des, id }) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.price = Number(price).toFixed(2);
    this.des = des;
    this.id = id;
  }
  async store() {
    let cart = await getCartFromFile();
    cart.push(this);
    fs.writeFile(_path, JSON.stringify(cart), (err, data) => {
      console.log(err);
    });
  }

  static fetchAll() {
    return getCartFromFile();
  }
};
