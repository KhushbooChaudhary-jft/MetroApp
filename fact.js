//let n=4;
//by using forloop
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }
// console.log(fact);


//by using recursion
var fact = 1;
function fun(n) {
    if (n == 0) {
        return fact;
    }
    return fact = n * fun(n - 1);
}
fun(4);
console.log(fact);


