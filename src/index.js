#!/usr/bin/env node

const apiClient = require('./api/api-client.js');
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please provide at least one argument.');
  return;
}

const onSuccessCallback = (responseData) => {
  console.log(`Temperature: ${responseData.temp} celsius`);
  console.log(`Min Temperature: ${responseData.temp_min} celsius`);
  console.log(`Max Temperature: ${responseData.temp_max} celsius`);
  console.log(`Feels like: ${responseData.feels_like} celsius`);
  console.log(`Humidity: ${responseData.humidity}`);
  console.log(`Condition: ${responseData.condition}`);
};

apiClient.get(
  `https://micro-weather.vercel.app?city=${args[0]}&country=${args[1]}`,
  onSuccessCallback
);
