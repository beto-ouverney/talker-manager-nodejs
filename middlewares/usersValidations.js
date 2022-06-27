const { error } = require('../schema/error');

function usersValidations(req, res, next) {
  const { email, password } = req.body;
  if (!email) {
    return res.status(error.emailIsRequired.status)
    .json({ message: error.emailIsRequired.message });
  }
  const regexValidation = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  if (!regexValidation.test(email)) {
    return res.status(error.invalidEmail.status).json({ message: error.invalidEmail.message });
  }
  if (!password) {
    return res.status(error.passwordIsRequired.status)
    .json({ message: error.passwordIsRequired.message });
  }
  if (password.length < 6) {
    return res.status(error.invalidPassword.status)
    .json({ message: error.invalidPassword.message });
  }
  return next();
}

module.exports = { usersValidations };