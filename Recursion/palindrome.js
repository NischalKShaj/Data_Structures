// ============================> file to find the palindrome of a string or number using recursion <===================

let palindrome = function(value){
    value= value.toString();
    if(value.length<=1){
        return true;
    }
    if(value[0]===value[value.length-1]){
        return palindrome(value.slice(1,-1))
    } else {
        return false
    }
}
const value = "malayalam"
const result = palindrome(value);
console.log(result);