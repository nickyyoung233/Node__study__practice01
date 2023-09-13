const path = require("path");

const express = require("express");

const bodyParser = express.urlencoded({ extended: false });
// const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");

const app = express();
// ---------pug engine---------
// app.set("view engine", "pug");

// -----------handlebars engine-----------
app.engine(
  "hbs",
  expressHandlebars({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);
// app.engine("hbs", expressHandlebars());
// app.set("view engine", "hbs");

// ---------EJS engine---------
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

/** use parser middleware */
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser);
/** set static file location */
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((_req, res, _next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
});

app.listen(3000);
