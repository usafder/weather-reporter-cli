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
    console.log(`Temperature: ${responseData.temp} celsius`);
    console.log(`Min Temperature: ${responseData.temp_min} celsius`);
    console.log(`Max Temperature: ${responseData.temp_max} celsius`);
    console.log(`Feels like: ${responseData.feels_like} celsius`);
    console.log(`Humidity: ${responseData.humidity}`);
    console.log(`Condition: ${responseData.condition}`);
  };
  apiClient.get(url, onSuccessCallback);
};
