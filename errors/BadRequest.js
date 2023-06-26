/* eslint-disable linebreak-style */
/* eslint-disable func-names */
class BadRequestError extends Error {
  constructor(message = 'Некорректные данные!') {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
