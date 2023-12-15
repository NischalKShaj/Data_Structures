let print = function(n){
    if(n<=100){
        console.log(n)
        return print(n+1);
    }
}
const n= 1;
const result = print(n);