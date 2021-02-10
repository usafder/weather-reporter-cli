module.exports = () => {
  const table = require('cli-table3');
  const colors = require('colors');

  const grid = new table({
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
