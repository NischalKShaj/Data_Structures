// ============> find factorial using recursion <==================

let factorial = function(n){
    if(n<=1){
        return 1;
    }
    return n* factorial(n-1)
}
const n =5;
const result = factorial(n)
console.log(result);