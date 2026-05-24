import { JSONFilePreset } from 'lowdb/node';
import path from 'path';
import fs from 'fs/promises';
import os from 'os';

const getDbPath = async () => {
  const configDir = path.join(os.homedir(), '.gh-insight');
  try {
    await fs.mkdir(configDir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
  return path.join(configDir, 'db.json');
};

const defaultData = {
  history: [],
  cache: {},
  settings: {}
};

export const getDb = async () => {
  const dbPath = await getDbPath();
  return JSONFilePreset(dbPath, defaultData);
};
