/* eslint-disable linebreak-style */
/* eslint-disable func-names */
const jwt = require('jsonwebtoken');
const Unauthorized = require('../errors/Unauthorized');
const { JWT_SECRET } = require('../config/index');

const handleAuthError = () => {
  throw new Unauthorized('Необходима авторизация');
};

module.exports = (req, res, next) => {
  // const token = req.cookies.jwt;
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return handleAuthError(res);
  }

  req.user = payload;

  return next();
};
