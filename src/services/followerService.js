import { getDb } from '../data/db/index.js';
import { logger } from '../utils/logger.js';

export class FollowerService {
  constructor() {
    this.dbPromise = getDb();
  }

  async getFollowers(username) {
    logger.debug(`Fetching followers for ${username}`);
    // In a real implementation, this would call GitHub API
    // and then cache the results in lowdb.
    return {
      total: 1245,
      recent: []
    };
  }

  async updateHistory(username, data) {
    const db = await this.dbPromise;
    await db.read();
    
    db.data.history.push({
      type: 'follower_update',
      username,
      timestamp: new Date().toISOString(),
      data
    });
    
    await db.write();
  }
}
