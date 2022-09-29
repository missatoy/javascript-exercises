const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return 'ERROR'
  } else if (Math.sign(a) === -1 || Math.sign(b) === -1) {
    return 'ERROR'
  } else {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let range = []
    let sum = 0

    for (let i = min; i <= max; i++) {
      range.push(i)
    }

    range.map(addToSum)

    function addToSum(num) {
      return sum += num
    }

    return sum
  }

};

// Do not edit below this line
module.exports = sumAll;


// Math.sign(a) === -1 || Math.sign(b) === -1
