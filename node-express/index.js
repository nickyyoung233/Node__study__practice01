// const http = require("http");
const express = require("express");

const app = express();

//middleware
app.use("/", (req, res, next) => {
  console.log("This is first");
  next();
});
app.use("/hello-page", (req, res, next) => {
  console.log("In middleware 0!");
  res.send("<h1>Hello from Express!</h1>");
});
app.use("/", (req, res, next) => {
  console.log("In middleware 2!");
  res.send("<h1>HOME Page!</h1>");
});
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
