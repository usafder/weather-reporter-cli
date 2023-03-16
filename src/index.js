#!/usr/bin/env node

const colors = require('colors');
const args = require('minimist')(process.argv.slice(2)); // ignore first two arguments
const { commands } = require('./common/constants');
const reportCommand = require('./commands/report');
const versionCommand = require('./commands/version');
const helpCommand = require('./commands/help');

const [command, city] = args._;
switch (command) {
  case commands.REPORT:
    reportCommand(city);
    break;
  case commands.VERSION:
    versionCommand();
    break;
  case commands.HELP:
    helpCommand();
    break;
  default:
    console.log(colors.red('Invalid command entered.'));
}
