const usersUseCase = require('../usecases/usersUseCase');

async function getToken(request, response) {
  const { email, password } = request.body;
  const token = await usersUseCase.getToken(email, password);
  return response.status(200).json({ token });
}

module.exports = { getToken };