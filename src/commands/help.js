const Table = require('cli-table3');

module.exports = () => {
  const grid = new Table({
    head: ['Command', 'Description'],
    style: { head: ['green'] },
  });
  grid.push(
    ['weather report [city]', 'Gives the detail of the current weather of the mentioned city.'],
    ['weather version', 'Gives the current version of the cli.'],
    ['weather help', 'Displays a list of supported commands and their description.'],
  );

  console.log(grid.toString());
};
