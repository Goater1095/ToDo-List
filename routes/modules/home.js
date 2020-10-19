//引用Express & Express 路由器
const express = require('express')
const router = express.Router()
// 引用Todo Model
const Todo = require('../../models/todo')
// 定義首頁路由
router.get("/", (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: "asc" })
    .then((todos) => res.render("index", { todos }))
    .catch((error) => console.error(error));
});
//匯出路由模組
module.exports = router