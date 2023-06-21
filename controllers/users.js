/* eslint-disable linebreak-style */
const User = require('../models/users');

module.exports.createUser = (req, res) => {
  const { name } = req.body;

  User.create({ name })
	  .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'Произошла ошибка' }));
};
