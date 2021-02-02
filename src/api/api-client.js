const axios = require('axios');
const ora = require('ora');

async function get(url, onSuccessCallback, onFailureCallback) {
  const spinner = ora().start('Loading data...');

  try {
    const response = await axios.get(url);
    spinner.stop();
    onSuccessCallback(response.data);
  } catch (error) {
    spinner.stop();
    if (onFailureCallback) {
      onFailureCallback(error);
    } else {
      console.trace(error.message);
    }
  }
}

module.exports.get = get;
