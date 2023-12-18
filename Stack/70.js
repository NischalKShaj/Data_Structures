// ==================> Climbing Stairs <========================

let climbStair = function (n) {
  if (n < 2) {
    return 1;
  }
  let stack = [1, 1];
  for (let i = 2; i <= n; i++) {
    let thirdStair = stack[0] + stack[1];
    stack[0] = stack[1];
    stack[1] = thirdStair;
  }
  return stack[1];
};
const n = 3;
const result = climbStair(n);
console.log(result);
