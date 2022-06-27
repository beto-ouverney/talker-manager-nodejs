const { readJson } = require('../../../helpers/readJson');

async function getAllTalkersModel() {
  try {
    const data = await readJson();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = { getAllTalkersModel };