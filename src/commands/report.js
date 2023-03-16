const colors = require('colors');
const Table = require('cli-table3');
const apiClient = require('../api/api-client');

module.exports = (city) => {
  if (!city) {
    console.log(colors.red('Please mention the name of the city.'));
    return;
  }

  const url = `https://micro-weather.vercel.app?city=${city}&country=null`;
  const onSuccessCallback = (responseData) => {
    const grid = new Table({
      head: [
        'Temperature (°C)',
        'Min Temperature (°C)',
        'Max Temperature (°C)',
        'Feels like (°C)',
        'Humidity',
        'Condition',
      ],
      style: { head: ['green'] },
      colAligns: new Array(6).fill('center'),
    });
    const {
      temp,
      temp_min: minTemp,
      temp_max: maxTemp,
      feels_like: tempFeelsLike,
      humidity,
      condition,
    } = responseData;
    grid.push([temp, minTemp, maxTemp, tempFeelsLike, humidity, condition]);
    console.log(grid.toString());
  };
  apiClient.get(url, onSuccessCallback);
};
