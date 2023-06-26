/* eslint-disable linebreak-style */
/* eslint-disable func-names */
const SALT_ROUNDS = 10;
const JWT_SECRET = 'JWT_SECRET';
const { PORT = 3001 } = process.env;

module.exports = {
  SALT_ROUNDS,
  JWT_SECRET,
  PORT,
};
