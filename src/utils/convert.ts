/**
 * kelvinToFahrenheit
 * @param {number} kelvin - temperature in kelvin
 * @param {number} digit - default:3, the number of significant digits
 * @return {number} - temperature in fahrenheit
 **/
function kelvinToFahrenheit(kelvin: number, digit = 3): number {
  return (
    Math.round(((kelvin * 9) / 5 - 459.67) * Math.pow(10, digit)) /
    Math.pow(10, digit)
  );
}

/**
 * kelvinToCelsius
 * @param {number} kelvin - temperature in kelvin
 * @param {number} digit - default:3, the number of significant digits
 * @return {number} - temperature in celsius
 **/
function kelvinToCelsius(kelvin: number, digit = 3): number {
  return (
    Math.round((kelvin - 273.15) * Math.pow(10, digit)) / Math.pow(10, digit)
  );
}

export { kelvinToFahrenheit, kelvinToCelsius };
