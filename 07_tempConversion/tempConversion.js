const convertToCelsius = function(farenheight) {
  const frTemp = ((farenheight - 32)*5/9);
  return Math.round(frTemp*10) / 10;
};

const convertToFahrenheit = function(celcius) {
  const csTemp = (celcius*(9/5) +32);
  return Math.round(csTemp*10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


// this is test