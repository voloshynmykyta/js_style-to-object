'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const properties = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');

  return properties.reduce((acc, property) => {
    const colonIndex = property.indexOf(':');

    const key = property.slice(0, colonIndex).trim();
    const value = property.slice(colonIndex + 1).trim();

    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
