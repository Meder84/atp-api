/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

const router = require('express').Router(); // создали роутер
const { users } = require('./db.js'); // данные нужны для роутинга, поэтому импортируем их
const User = require('./models/user.js');

// Проверим, существует ли пользователь:
const doesUserExist = (req, res, next) => {
  const { id } = req.params;
  if (!users[id]) {
    res.send('Такого пользователя не существует');
    return;
  }

  next(); // вызываем next
};

const sendUser = (req, res) => {
  const { id } = req.params;
  res.send(`Пользователь ${users[id]}`);
};

const newUser = (req, res) => {
  const { name, about } = req.body;

  User.create({ name, about });
};

router.get('/users/:id', doesUserExist);
router.get('/users/:id', sendUser);

module.exports = router;
