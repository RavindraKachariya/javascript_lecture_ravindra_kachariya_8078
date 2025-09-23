function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ravindra"));


const add = (a, b) => a + b;
console.log("Addition (Arrow Function):", add(10, 5));


function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));


function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction(10);
}
console.log("Nested Function Result:", outerFunction(5));


(function (message) {
  console.log("IIFE says:", message);
})("This runs immediately!");


function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log("Closure Example 1:", counter());
console.log("Closure Example 2:", counter());
console.log("Closure Example 3:", counter());
