import fs from 'fs/promises';

async function readJson() {
  try {
    const data = await fs.readFile('./talker.json', 'utf-8');
    const talkers = JSON.parse(data);
    return talkers;
  } catch (err) {
      throw new Error(err.message);
  }
}

export default readJson;
