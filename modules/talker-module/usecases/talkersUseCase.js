const talkerModel = require('../model/talkersModel');
const { error } = require('../../../schema/error');

async function getAllTalkersUseCase() {
  try {
    const data = await talkerModel.getAllTalkersModel();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getTalkerById(id) {
  try {
    const talker = await talkerModel.getTalkerById(id);
    if (!talker) {
     return {
       error: error.talkerNotFound,
     };
    } 
      return { talker };
    } catch (err) {
      throw new Error(err.message);
    }
}

async function createTalker(talker) {
  try {
    const newTalker = await talkerModel.createTalker(talker);
    return newTalker;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function editTalker(talker) {
  try {
    const editedTalker = await talkerModel.editTalker(talker);
    return editedTalker;
  } catch (err) {
    throw new Error(err.message);
  }
}
module.exports = { getAllTalkersUseCase, getTalkerById, createTalker, editTalker };