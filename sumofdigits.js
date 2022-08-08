// let rem = 0;

function findSum(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function sum1(num) {
    // while (num != 0) {
    //     rem += num % 10;
    //     num = Math.floor(num / 10);
    // }
    // console.log(c)
    if (Math.floor(num / 10) == 0) return num;


    return sum1(findSum(num));


}
console.log(sum1(12345));
