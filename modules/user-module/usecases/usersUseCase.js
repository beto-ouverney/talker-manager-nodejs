const usersModel = require('../model/usersModel');

async function getToken(email, password) {
  const token = usersModel.getToken(email, password);
  return token;
}

module.exports = { getToken };