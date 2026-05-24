import { Command } from 'commander';
import ora from 'ora';
import { renderDashboard } from '../ui/dashboards/main.js';
import { logger } from '../utils/logger.js';

export const dashboardCommand = new Command('dashboard')
  .description('Launch the interactive terminal dashboard')
  .option('-r, --repo <repo>', 'Specify a repository to analyze')
  .action(async (options) => {
    const spinner = ora('Loading dashboard data...').start();
    
    try {
      // Simulate data loading for dashboard
      await new Promise(resolve => setTimeout(resolve, 1000));
      spinner.stop();
      
      renderDashboard(options);
    } catch (error) {
      spinner.fail('Failed to load dashboard');
      logger.error(error.message);
    }
  });
