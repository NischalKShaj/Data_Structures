let test = function (n) {
  if (n <= 1) {
    return;
  }
  test(n - 1);
  console.log(n);
  test(n - 1);
};
const n = 5;
const result = test(n);
