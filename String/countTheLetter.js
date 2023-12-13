// ================> file to count the occurance of each alphabet in the word <========================

let countLetter = function (str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let charCount = str[i];
    count[charCount] = (count[charCount] || 0) + 1;
  }
  return count;
};
const str = "AAABBC";
const result = countLetter(str);
console.log(result);
