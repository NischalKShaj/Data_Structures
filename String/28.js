// ===================> Find the Index of the First Occurrence in a String <================================

var strStr = function (haystack, needle) {
  return haystack.includes(needle);
};
const haystack = "leetcode";
const needle = "leeto";
const result = strStr(haystack, needle);
console.log(result);
