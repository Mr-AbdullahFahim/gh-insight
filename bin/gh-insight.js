#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { dashboardCommand } from '../src/commands/dashboard.js';
import { followersCommand } from '../src/commands/followers.js';

// Setup basic program configuration
program
  .name('gh-insight')
  .description(chalk.blue('GitHub Follower Analytics & Repository Mapping CLI'))
  .version('1.0.0');

// Register commands
program.addCommand(dashboardCommand);
program.addCommand(followersCommand);

// Add default handler if no arguments
if (process.argv.length === 2) {
  program.outputHelp();
  process.exit(1);
}

program.parseAsync(process.argv).catch(err => {
  console.error(chalk.red('\nError running gh-insight:'), err.message);
  process.exit(1);
});
