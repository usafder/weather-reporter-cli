const axios = require('axios');
const ora = require('ora');

async function get(url, onSuccessCallback, onFailureCallback) {
  const spinner = ora().start('Loading data...');

  try {
    const response = await axios.default.get(url);
    spinner.stop();
    onSuccessCallback(response.data);
  } catch (error) {
    spinner.stop();
    const colors = require('colors');
    onFailureCallback ? onFailureCallback(error) : console.trace(colors.red(error.message));
  }
}

module.exports.get = get;
