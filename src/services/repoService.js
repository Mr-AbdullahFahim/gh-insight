import { logger } from '../utils/logger.js';
import simpleGit from 'simple-git';

export class RepoService {
  constructor(repoPath) {
    this.git = simpleGit(repoPath);
  }

  async getCommitHistory() {
    logger.debug('Fetching commit history');
    try {
      const log = await this.git.log();
      return log;
    } catch (error) {
      logger.error(`Failed to fetch git logs: ${error.message}`);
      throw error;
    }
  }
}
