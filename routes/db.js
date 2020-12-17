// documentation mongodb : 
// https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas


const express = require('express');
const router = express.Router();
const todoModel = require('./models/todo');

router.post('/add', async (req, res, next) => {
  console.log(req.body);
  const myTodo = new todoModel(req.body);
  console.log(myTodo);

  try {
    await myTodo.save();
    res.status(200).send('ok');
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/todos', async (req, res, next) => {
  const todos = await todoModel.find({});

  try {
    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/todo/:sujet', async (req, res, next) => {
  const sujet = req.params.sujet;
  const todo = await todoModel.find({ sujet: sujet });
  res.status(200).send(todo);
});

router.get('/delete/:id', async (req, res, next) => {
  try {
    const todo = await todoModel.findByIdAndDelete(req.params.id)

    if (!todo) res.status(404).send("No item found")
    res.status(200).send('ok');
  } catch (err) {
    res.status(500).send(err)
  }
});

router.post('/edit/:id', async (req, res, next) => {
  try {
    const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body)
    await todo.save()
    res.status(200).send('ok');
  } catch (err) {
    res.status(500).send(err)
  }
});

module.exports = router;