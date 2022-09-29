const repeatString = function(string, num) {
  let returnedString = ''
  if (num > 0) {
    while (num > 0) {
      returnedString += string
      num--
    }
    return returnedString
  } else if (num === 0) {
    return returnedString
  } else {
    return 'ERROR'
  }
};

// Do not edit below this line
module.exports = repeatString;
