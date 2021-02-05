#!/usr/bin/env node

const { commands } = require('./common/constants');
const args = require('minimist')(process.argv.slice(2)); // ignore first two arguments
const [command, city, country] = args._;

switch (command) {
  case commands.REPORT:
    require('./commands/report')(city, country);
    break;
  case commands.VERSION:
    require('./commands/version')();
    break;
  default:
    const colors = require('colors');
    console.log(colors.red('Invalid command entered.'));
}
