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
 * celsiusToFahrenheit
 * @param {int} celsius - temperature in celsius
 * @param {number} digit - default:3, the number of significant digits
 * @return {number} - temperature in fahrenheit
 **/
function celsiusToFahrenheit(celsius: number, digit = 3): number {
  return (
    Math.round(((celsius * 9) / 5 + 32) * Math.pow(10, digit)) /
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

/**
 * fahrenheitToCelsius
 * @param {number} fahrenheit - temperature in fahrenheit
 * @param {number} digit - default:3, the number of significant digits
 * @return {number} - temperature in celsius
 **/
function fahrenheitToCelsius(fahrenheit: number, digit = 3): number {
  return (
    Math.round((((fahrenheit * 1 - 32) * 5) / 9) * Math.pow(10, digit)) /
    Math.pow(10, digit)
  );
}

module.exports = {
  kelvinToFahrenheit,
  kelvinToCelsius,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
