const dotenv = require('dotenv');

module.exports = async ({ options, resolveConfigurationProperty }) => {
  const envVars = dotenv.config({ path: '.env' }).parsed;
  return Object.assign(
    {},
    envVars,
  );
};