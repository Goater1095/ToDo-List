const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const exhbs = require("express-handlebars");
const Todo = require("./models/todo");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/todo-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// 取得資料庫連線狀態
const db = mongoose.connection;
// 連線異常
db.on("error", () => {
  console.log("mongodb error!");
});
// 連線成功
db.once("open", () => {
  console.log("mongodb connected!");
});

//set template engine
app.engine("hbs", exhbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

//set use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: "asc" })
    .then((todos) => res.render("index", { todos }))
    .catch((error) => console.error(error));
});
app.get("/todos/new", (req, res) => {
  return res.render("new");
});

app.post("/todos", (req, res) => {
  const name = req.body.name;
  return Todo.create({ name })
    .then(() => res.redirect("/"))
    .catch((error) => console.error(error));
});
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render("detail", { todo }))
    .catch((error) => console.error(error));
});
app.get("/todos/:id/edit", (req, res) => {
  const id = req.params.id;
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render("edit", { todo }))
    .catch((error) => console.error(error));
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const { name, isDone } = req.body;
  return Todo.findById(id)
    .then((todo) => {
      todo.name = name;
      todo.isDone = isDone === "on";
      todo.save();
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch((error) => console.error(error));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  return Todo.findById(id)
    .then((todo) => todo.remove())
    .then(() => res.redirect("/"))
    .catch((error) => console.error(error));
});

app.listen(port, () => {
  console.log(`The Server is start on http://localhost:${port}`);
});
