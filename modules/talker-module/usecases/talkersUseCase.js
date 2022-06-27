const talkerModel = require('../model/talkersModel');

async function getAllTalkersUseCase() {
  try {
    const data = await talkerModel.getAllTalkersModel();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { getAllTalkersUseCase };