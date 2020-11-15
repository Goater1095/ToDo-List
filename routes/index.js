//引用Express & Express 路由器
const express = require('express');
const router = express.Router();
//引入home模組
const home = require('./modules/home');
//引入todos模組
const todos = require('./modules/todos');
const users = require('./modules/users'); // add this
const auth = require('./modules/auth');
const { authenticator } = require('../middleware/auth');
// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/todos', authenticator, todos);
router.use('/users', users);
router.use('/auth', auth);
router.use('/', authenticator, home);

// router.use('/', authenticator, home);
//匯出路由器
module.exports = router;
