// ==========================> Reverse Vowels of a String <============================

var reverseVowels = function (s) {
  start = 0;
  end = s.length - 1;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let temp;
  const arr = [...s];
  while (start < end) {
    if (!vowels.has(arr[start])) {
      start++;
    } else if (!vowels.has(arr[end])) {
      end--;
    } else if (vowels.has(arr[start]) && vowels.has(arr[end])) {
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  return arr.join("");
};
const s = "leetcode";
const result = reverseVowels(s);
console.log(result);
