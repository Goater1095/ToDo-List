//引用Express & Express 路由器
const express = require('express')
const router = express.Router()

//引入home模組
const home = require('./modules/home')
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)
//引入todos模組
const todos = require('./modules/todos')
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/todos', todos)

//匯出路由器
module.exports = router