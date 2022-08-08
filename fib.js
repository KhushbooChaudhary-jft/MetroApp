let a = 0, b = 1;
num = 9;
let nextterm;
console.log(a, b);
function fun(num) {
    for (let i = 2; i < num; i++) {
        nextterm = a + b;
        a = b;
        b = nextterm;
        console.log(nextterm);
    }
}
fun(num);

//POWER OF A NUMBER
let p = 2, q = 3;
let pow = 1;
while (p != 0) {
    pow *= q;
    p--;
}
console.log(`${q} to the pow 2 is`, pow);
//factors of a number

let n = 20;
console.log("factors are:")
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}

//armstrong number
var rem, temp, d = 0;
var c = 371;
temp = c;

while (temp > 0) {
    rem = temp % 10;
    temp = Math.floor(temp / 10);
    d = d + (rem * rem * rem);//1//344//371
}

if (c == d)
    console.log("given number is an armstrong number");
else
    console.log("given number is not an armstrong number");


//hcf and lcm
let num1 = 12, num2 = 36, hcf = 1;
for (let i = 1; i <= num1 || i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0)
        hcf = i;
}
console.log("hcf is " + hcf);
let lcm = Math.floor((num1 * num2) / hcf);
console.log("lcm is " + lcm);

//capitalize first and last characters of a string
let stt = "hii this is khushboo";
let str = stt;
for (let i = 0; i <= stt.length - 1; i++) {
    if (i == 0 || i == stt.charAt(stt.length - 1)) {
        str = str.replace(stt.toUpperCase(i));
    }
}
console.log(str);



