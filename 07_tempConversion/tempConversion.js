const ftoc = function(temp) {

  let roundedTemp = Math.round(((temp - 32) * (5 / 9)) * 10) / 10;

  return (roundedTemp);
};

const ctof = function(temp) {

  let roundedTemp = Math.round((temp  * (9 / 5) + 32) * 10) / 10;

  return (roundedTemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
