let sumofPal = 0;


for (let n = 100; n <= 999; ++n) {
    let rev = 0, rem, temp;
    temp = n;
    while (temp != 0) {
        rem = temp % 10;
        rev = Math.floor(rev * 10 + rem);
        temp = Math.floor(temp / 10);
    }
    if (n == rev) {

        sumofPal += rev;
    }
}
console.log("the sum of palindrome numbers between 100 to 999 is " + sumofPal);
