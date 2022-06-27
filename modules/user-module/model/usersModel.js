const crypto = require('crypto-js');

async function getToken(email, password) {
  const token = crypto.AES.encrypt(email, password);
  return token.salt.toString();
}

module.exports = { getToken };