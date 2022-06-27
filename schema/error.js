const error = {
  readFails: {
    status: 500,
    message: 'falha interna na leitura de dados',
  },
  writeFails: {
    status: 500,
    message: 'falha interna na escrita dos dados',
  },
  talkerNotFound: {
    status: 404,
    message: 'Pessoa palestrante não encontrada',
  },
  invalidId: {
    status: 400,
    message: 'Id deve ser um número',
  },
  emailIsRequired: {
    status: 400,
    message: 'O campo "email" é obrigatório',
  },
  invalidEmail: {
    status: 400,
    message: 'O "email" deve ter o formato "email@email.com"',
  },
  passwordIsRequired: {
    status: 400,
    message: 'O campo "password" é obrigatório',
  },
  rateIsRequired: {
    status: 400,
    message: 'O campo "rate" é obrigatório',
  },
  watchedAtIsRequired: {
    status: 400,
    message: 'O campo "watchedAt" é obrigatório',
  },
  invalidPassword: {
    status: 400,
    message: 'O "password" deve ter pelo menos 6 caracteres',
  },
  tokenNotFound: {
    status: 401,
    message: 'Token não encontrado',
  },
  invalidToken: {
    status: 401,
    message: 'Token inválido',
  },
  nameIsRequired: {
    status: 400,
    message: 'O campo "name" é obrigatório',
  },
  invalidName: {
    status: 400,
    message: 'O "name" deve ter pelo menos 3 caracteres',
  },
  ageIsRequired: {
    status: 400,
    message: 'O campo "age" é obrigatório',
  },
  invalidAge: {
    status: 400,
    message: 'A pessoa palestrante deve ser maior de idade',
  },
  talkIsRequired: {
    status: 400,
    message:
      'O campo "talk" é obrigatório',
  },
  invalidWathedAt: {
    status: 400,
    message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  },
  invalidRate: {
    status: 400,
    message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  },
};

module.exports = { error };