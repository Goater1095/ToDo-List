//引用Express & Express 路由器
const express = require('express');
const router = express.Router();
// 引用Todo Model
const Todo = require('../../models/todo');
// 定義路由

router.get('/new', (req, res) => {
  return res.render('new');
});

router.post('/', (req, res) => {
  const userId = req.user._id;
  const name = req.body.name;
  return Todo.create({ name, userId })
    .then(() => res.redirect('/'))
    .catch((error) => console.error(error));
});
router.get('/:id', (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;
  return Todo.findOne({ _id, userId })
    .lean()
    .then((todo) => res.render('detail', { todo }))
    .catch((error) => console.error(error));
});
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;
  return Todo.findOne({ _id, userId })
    .lean()
    .then((todo) => res.render('edit', { todo }))
    .catch((error) => console.error(error));
});

router.put('/:id', (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;
  const { name, isDone } = req.body;
  return Todo.findOne({ _id, userId })
    .then((todo) => {
      todo.name = name;
      todo.isDone = isDone === 'on';
      todo.save();
    })
    .then(() => res.redirect(`/todos/${_id}`))
    .catch((error) => console.error(error));
});

router.delete('/:id', (req, res) => {
  const userId = req.user._id;
  const _id = req.params.id;
  return Todo.findOne({ _id, userId })
    .then((todo) => todo.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.error(error));
});

//匯出路由模組
module.exports = router;
