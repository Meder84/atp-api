/* eslint-disable linebreak-style */
/* eslint-disable func-names */
const { isCelebrateError } = require('celebrate');

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;

  if (isCelebrateError(err)) {
    const [error] = err.details.values();
    return res.status(400).send({ message: error.message });
  }
  res.status(status).send({
    message: err.message,
  });
  return next();
};

module.exports = errorHandler;
