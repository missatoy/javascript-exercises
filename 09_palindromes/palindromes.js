const palindromes = function (word) {
  var regex = /[\W_]/g;
  var lowRegStr = word.toLowerCase().replace(regex, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
