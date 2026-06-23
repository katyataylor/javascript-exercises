const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32)/1.8;
  return +tempC.toFixed(1);
};

const convertToFahrenheit = function(tempC) {
  let tempF = ((tempC * 1.8)+32);
  return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
