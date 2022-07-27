// by using convert to string
// for (let i = 100; i <= 999; ++i) {
//     let convertToStr = i.toString();
//     //console.log(convertToStr);
//     let storeNum;
//     if ((convertToStr[0] * convertToStr[1]) === parseInt(convertToStr[2])) {
//         storeNum = convertToStr;
//         console.log(storeNum);
//     }
// }

//by using int
// for (let i = 100; i <= 999; ++i) {
//     let findLastDigit = i % 10;
//     let number = Math.floor(i / 10);
//     let product = 1;
//     for (j = 0; j < 2; ++j) {
//         product = product * (number % 10);
//         number = Math.floor(number / 10);
//     }
//     if (product === findLastDigit) {
//         console.log(i);
//     }

// }

//by without using loop
for (let i = 100; i <= 999; ++i) {
    let fdigit = Math.floor(i / 100);
    let sdigit = Math.floor(i / 10) % 10;
    let tdigit = i % 10;
    if ((fdigit * sdigit) === tdigit) {
        console.log(i);
    }
}