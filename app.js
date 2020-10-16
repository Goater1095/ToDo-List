const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");

// express定義會自動尋找目錄的index的檔案
const routes = require('./routes')

require('./config/mongoose')
//set template engine
app.engine("hbs", exhbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

//set use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(routes)

app.listen(port, () => {
  console.log(`The Server is start on http://localhost:${port}`);
});
