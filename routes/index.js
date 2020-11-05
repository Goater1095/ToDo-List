//引用Express & Express 路由器
const express = require('express');
const router = express.Router();
//引入home模組
const home = require('./modules/home');
//引入todos模組
const todos = require('./modules/todos');
const users = require('./modules/users'); // add this

// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home);
// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/todos', todos);

router.use('/users', users); // add thiss

//匯出路由器
module.exports = router;
