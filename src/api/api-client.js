const axios = require('axios');
const ora = require('ora');
const colors = require('colors');

async function get(url, onSuccessCallback, onFailureCallback) {
  const spinner = ora().start('Loading data...');

  try {
    const response = await axios.default.get(url);
    spinner.stop();
    onSuccessCallback(response.data);
  } catch (error) {
    spinner.stop();
    if (onFailureCallback) {
      onFailureCallback(error);
      return;
    }
    console.trace(colors.red(error.message));
  }
}

module.exports.get = get;
