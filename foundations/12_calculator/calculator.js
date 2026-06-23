const add = function(a,b) {
	let num = (a) + (b);
  return num;
};

const subtract = function(a,b) {
	let num = (a - b);
  return num;
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(a,b) {
	let total = a ** b;
  return total;
};

const factorial = function(a) {
	let total = 1;
  for ( let i = a; i > 1; i--) {
    total *= i;
  }
  return total;
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
