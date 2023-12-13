// ======> file to replace the character of a string by the given position <===============

let change = function (str, num) {
  let key = num % 26;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let letterPos = str.charCodeAt(i) + key;
    if (letterPos <= 122) {
      arr.push(String.fromCharCode(letterPos));
    } else {
      arr.push(String.fromCharCode(96 + (letterPos % 122)));
    }
  }
  return arr.join("");
};

const str = "hai";
const num = 2;
const result = change(str, num);
console.log(result);
