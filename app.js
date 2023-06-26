/* eslint-disable linebreak-style */
/* eslint-disable func-names */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');

const { NOT_FOUND } = require('./config/constants');
const errorHandler = require('./middlewares/errorHandler');
const { createUser, login } = require('./controllers/users');
const { registerValid, loginValid } = require('./middlewares/validations');
const auth = require('./middlewares/auth');
const { PORT } = require('./config/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/atp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

app.use(helmet());
app.use(cookieParser());

app.use(cors());

app.post('/signup', registerValid, createUser);
app.post('/signin', loginValid, login);

app.use(auth);

app.use('/', require('./routes/cards'));
app.use('/', require('./routes/users'));

app.use('*', (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Страница не найдена!' });
});

app.use(errorHandler);
app.listen(PORT);
