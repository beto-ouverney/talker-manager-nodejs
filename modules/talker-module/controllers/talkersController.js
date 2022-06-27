const talkersUseCase = require('../usecases/talkersUseCase');

async function getAllTalkers(request, response) {
  try {
    const data = await talkersUseCase.getAllTalkersUseCase();
    return response.status(200).json(data);
  } catch (err) {
    return response.status(500).json({ error: err.message });
  }
}

async function getTalkerById(request, response) {
  const { id } = request.params;
  const result = await talkersUseCase.getTalkerById(id);
  if (result.error) {
    return response.status(result.error.status).json({ message: result.error.message });
  }
    return response.status(200).json(result.talker);
}

async function createTalker(request, response) {
  const { name, age, talk } = request.body;
  const talker = { name, age, talk };
  const result = await talkersUseCase.createTalker(talker);
  return response.status(201).json(result);
}

async function editTalker(request, response) {
  const { name, age, talk } = request.body;
  const { id } = request.params;
  const talker = { id: Number(id), name, age, talk };
  const result = await talkersUseCase.editTalker(talker);
  return response.status(200).json(result);
}
module.exports = { getAllTalkers, getTalkerById, createTalker, editTalker };