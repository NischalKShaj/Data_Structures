// =================> program for finding the fibonacci series in using recursion <==============================

let fibonacci = function (n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
const n = 5;
const result = fibonacci(n)
console.log(result);
