const add = function(a, b) {
  return (a + b)
};

const subtract = function(a, b) {
  return (a - b)
};

const sum = function(array) {
  result = 0
  array.forEach(num => {result += num});
  return result
};

const multiply = function(array) {
  result = 1
  array.forEach(num => {
    result *= num
  });
  return result
};

const power = function(a, b) {
  return (a ** b)
};

const factorial = function(num) {
  let result = num

  if (num === 0) {
    return 1
  } else {
    while (num > 1) {
      num --
      result *= num
    }
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
