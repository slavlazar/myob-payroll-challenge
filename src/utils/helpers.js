/**
 * Helper method to get file extension of given file name
 * @param {string} filename Full filename
 * @return {string} Given filename, will return the extension
 */
export const getFileExtension = filename =>
  filename
    .split('.')
    .pop()
    .replace(/[\W_]+/g, '');

/**
 * Helper method to general initial values from a given schema
 * @param {array} fields Array of fields to generate initial values
 * @return {object} Object of generated initial values from schema
 */
export const generateInitialValuesFromSchema = (fields = []) =>
  fields.reduce((accum, key) => ({ ...accum, [key]: '' }), {});

/**
 * Helper method to determine if given object is empty
 * @param {object} obj Object to check if empty
 * @return {boolean} Given object, return true if empty, false otherwise
 */
export const isObjectEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

/**
 * Helper method to log error messages to console
 * Curried function that first takes name of group,
 * followed by console messages
 * @param {string} groupName Name of group to log
 * @returns {[function, void]} Either returns a curried function or logs
 * to console
 */
export const logError = groupName => (...consoleMsg) => {
  console.group(groupName);
  consoleMsg.forEach(msg => {
    console.error(msg);
  });
  console.groupEnd();
};

/**
 * Helper method to round number to nearest integer
 * @param {number} val Number to round
 * @return {number} Rounded number
 */
export const round = val => Math.round(val);

/**
 *
 * @param {number} val Number to format
 * @param {boolean} roundValue Whether to round the value before formatting
 * @return {string} Formatted currency value
 */
export const formatCurrency = (val, roundValue = true) => {
  const valToConvert = roundValue ? round(val) : val;

  return Number(valToConvert).toLocaleString('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
  });
};
