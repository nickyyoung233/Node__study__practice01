const fs = require("fs");
const path = require("path");
const _path = path.join(process.cwd(), "data", "products.json");

const getProductsFromFile = () => {
  let products = [];
  products = fs.readFileSync(_path);
  if (products != null) {
    return JSON.parse(products);
  }
  return [];
};

module.exports = class Product {
  constructor({ title, imgUrl, price, des }) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.price = Number(price).toFixed(2);
    this.des = des;
  }
  async store() {
    // fs.readFile(_path, (err, data) => {
    //   let products = [];
    //   if (!err) {
    //     //data是个buffer 还是string
    //     products = data && JSON.parse(data);
    //   }
    //   products.push(this);
    //   fs.writeFile(_path, JSON.stringify(products), (err, data) => {
    //     console.log(err);
    //   });
    // });
    this.id = Math.random().toFixed(3);
    let products = await getProductsFromFile();
    products.push(this);
    fs.writeFile(_path, JSON.stringify(products), (err, data) => {
      console.log(err);
    });
  }

  static fetchAll() {
    return getProductsFromFile();
    // fs.readFile(_path, (err, data) => {
    //   if (err) {
    //     return [];
    //   }
    //   return JSON.parse(data);
    // });
  }

  static async findById(id) {
    const products = await getProductsFromFile();
    return products.find((p) => p.id === id);
  }
};
