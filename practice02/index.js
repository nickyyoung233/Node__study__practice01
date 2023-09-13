const path = require("path");

const express = require("express");
const routers = require("./routes/index");
const rootDir = require("./utils/path");

const app = express();
app.use(express.static(path.join(rootDir, "public")));
app.use(routers);

app.listen(3000);
