const convertToCelsius = function(farh) {
  let cel = (farh - 32) * (5/9);
  return Math.round(cel*10)/10;
};

const convertToFahrenheit = function(cel) {
  let farh = (cel * (9/5)) + 32;
  return Math.round(farh*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
