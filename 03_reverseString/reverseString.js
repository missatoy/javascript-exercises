
const reverseString = function(string) {
  let array = []
  let reversedString = ''

  for (const letter of string) {
    array.push(letter)
  }

  for (let i = 0; i < string.length; i++) {
    reversedString += array[array.length - 1]
    array.pop()
  }
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
