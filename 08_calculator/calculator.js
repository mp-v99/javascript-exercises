const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => {
    return acc * item;
  })
};

const power = function(a, b) {
  if (b === 0) return 1;
  let power = a;
	for (let i = 1; i < b; i++) {
    power *= a
  };
  return power;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let b = [];
  for (let i = 1; i <= a; i++) {
    b.unshift(i)
  }
  return b.reduce((acc, item) => {
    return acc * item
  });
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
