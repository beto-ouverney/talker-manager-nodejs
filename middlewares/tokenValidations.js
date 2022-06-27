const { error } = require('../schema/error');

function tokenValidations(req, res, next) {
  const {
    headers: { authorization: token },
  } = req;
  if (!token) {
    return res
      .status(error.tokenNotFound.status)
      .json({ message: error.tokenNotFound.message });
  }

  const regex = /[\da-fA-F]{16}/g;
  if (!regex.test(token)) {
    return res
      .status(error.invalidToken.status)
      .json({ message: error.invalidToken.message });
  }
  return next();
}

module.exports = { tokenValidations };
