const talkersUseCase = require('../usecases/talkersUseCase');

async function getAllTalkers(request, response) {
  try {
    const data = await talkersUseCase.getAllTalkersUseCase();
    return response.status(200).json(data);
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { getAllTalkers };