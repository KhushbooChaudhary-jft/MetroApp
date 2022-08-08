//reverse elements of string
let str = "hii this is khushboo";
let rev = "";
for (i = str.length - 1; i >= 0; i--) {
    rev = rev + str.charAt(i);
}
console.log(rev)

//sum of all elements in an array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);


//program to sort two numbers without using 3 variable
let a = 12, b = 13;
a = a + b;
b = a - b;
a = a - b;
console.log("the swapped value of a is " + a + " " + "and the value of b is " + b);

//array mutation
let ar = [1, 2, 3, 4];
console.log(ar);
ar.unshift(1);
console.log(ar)


