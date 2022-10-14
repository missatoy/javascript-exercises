const fibonacci = function(num) {
  let a = 1;
  let b = 1;
  let nextNum = 0;
  let sequence = []

  if (Math.sign(num) === 1) {
    for (let i = 1; i <= num; i++) {
      nextNum = a + b;
      sequence.push(a)
      a = b;
      b = nextNum
    }
  } else if (typeof num === "1") {
    parseInt(num, 10)
  } else {
    return "OOPS"
  }
  return sequence[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
