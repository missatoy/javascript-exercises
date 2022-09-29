const ftoc = function(temperature) {
  const ftocFormula = (temperature - 32) * 5/9
  const roundTo1Decimal = Math.round(ftocFormula * 10) / 10
  return roundTo1Decimal
};

const ctof = function(temperature) {
  const ctofFormula = (temperature * 9/5) + 32
  const roundTo1Decimal = Math.round(ctofFormula * 10) / 10
  return roundTo1Decimal
};

console.log(ctof(73.2))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
