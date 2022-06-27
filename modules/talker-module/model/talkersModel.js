const { readJson } = require('../../../helpers/readJson');
const { writeJson } = require('../../../helpers/writeJson');

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

async function createTalker(talker) {
  try {
    const data = await readJson();
    const talkers = data.sort((a, b) => a.id - b.id);
    const { id } = talkers[talkers.length - 1];
    const newTalker = {
      id: id + 1,
      ...talker,
    };
    data.push(newTalker);
    await writeJson(data);
    return newTalker;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function editTalker(talker) {
  try {
    const data = await readJson();
    console.log(talker.id);
    const talkers = data.filter((e) => e.id !== talker.id);
    talkers.push(talker);
    await writeJson(talkers);
    console.log(talker);
    return talker;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { getAllTalkersModel, getTalkerById, createTalker, editTalker };