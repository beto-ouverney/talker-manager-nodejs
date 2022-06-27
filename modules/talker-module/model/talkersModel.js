const { readJson } = require('../../../helpers/readJson');

async function getAllTalkersModel() {
  try {
    const data = await readJson();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getTalkerById(id) {
  try {
    const data = await readJson();
    const talker = data.find((e) => e.id === +id);
    return talker;
  } catch (err) {
    throw new Error(err.message);
  }
} 

module.exports = { getAllTalkersModel, getTalkerById };