module.exports = (city, country) => {
  if (!city) {
    const colors = require('colors');
    console.log(colors.red('Please mention the name of the city.'));
    return;
  }
  // country is optional currently so not checking for it

  const apiClient = require('../api/api-client');
  const url = `https://micro-weather.vercel.app?city=${city}&country=${country}`;
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
