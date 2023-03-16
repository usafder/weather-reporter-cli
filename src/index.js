#!/usr/bin/env node

const { commands } = require('./common/constants');
const args = require('minimist')(process.argv.slice(2)); // ignore first two arguments
const [command, city] = args._;

switch (command) {
  case commands.REPORT:
    require('./commands/report')(city);
    break;
  case commands.VERSION:
    require('./commands/version')();
    break;
  case commands.HELP:
    require('./commands/help')();
    break;
  default:
    const colors = require('colors');
    console.log(colors.red('Invalid command entered.'));
}
