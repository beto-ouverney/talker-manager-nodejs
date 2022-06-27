const { error } = require('../schema/error');

function checkTalk(talk) {
  const { watchedAt, rate } = talk;
  if (!watchedAt) {
    return error.watchedAtIsRequired;
  }
  if (rate === undefined) {
    return error.rateIsRequired;
  }
  if (talk.rate < 1 || talk.rate > 5) {
    return error.invalidRate;
  }
}

function checkEmptyValues(name, age, talk) {
  if (!name || name === '') {
    return error.nameIsRequired;
  }
  if (!age) {
    return error.ageIsRequired;
  }
  if (!talk) {
    return error.talkIsRequired;
  }
}

function checkNameAgeDate(name, age, talk) {
  const ageNumber = Number(age);
  if (name.length < 3) {
    return error.invalidName;
  }
  if (ageNumber < 18) {
    return error.invalidAge;
  }
  const dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  const { watchedAt } = talk;
  const date = watchedAt.toString();
  if (!date.match(dateFormat)) {
    return error.invalidWathedAt;
  }
}

function talkerValidations(req, res, next) {
  const {
    body: { name, age, talk },
  } = req;
  const errorEmptyValues = checkEmptyValues(name, age, talk);
  if (errorEmptyValues) {
    return res
      .status(errorEmptyValues.status)
      .json({ message: errorEmptyValues.message });
  }
  const errorTalk = checkTalk(talk);
  if (errorTalk) {
    return res.status(errorTalk.status).json({ message: errorTalk.message });
  }
  const errorDate = checkNameAgeDate(name, age, talk);
  if (errorDate) {
    return res.status(errorDate.status).json({ message: errorDate.message });
  }
  return next();
}

module.exports = { talkerValidations };
