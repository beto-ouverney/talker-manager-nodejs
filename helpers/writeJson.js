const fs = require('fs/promises');

async function writeJson(talkers) {
  try {
    const talkersToWfrite = JSON.stringify(talkers);
    await fs.writeFile('./talker.json', talkersToWfrite, 'utf-8');
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
}

module.exports = { writeJson };
