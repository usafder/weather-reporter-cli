module.exports = (city) => {
  if (!city) {
    const colors = require('colors');
    console.log(colors.red('Please mention the name of the city.'));
    return;
  }

  const apiClient = require('../api/api-client');
  const url = `https://micro-weather.vercel.app?city=${city}&country=null`;
  const onSuccessCallback = (responseData) => {
    const table = require('cli-table3');

    const grid = new table({
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
      temp_min,
      temp_max,
      feels_like,
      humidity,
      condition,
    } = responseData;
    grid.push([temp, temp_min, temp_max, feels_like, humidity, condition]);
    console.log(grid.toString());
  };
  apiClient.get(url, onSuccessCallback);
};
