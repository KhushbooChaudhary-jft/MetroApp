let arr = ['abc', 'abef', 'abccc', 'abftg', 'b'];
console.log(arr);
let prefix = arr[0];//abcc
for (let i = 1; i < arr.length; i++) {
    //removes last letter of prefix until prefix exists inside 
    //the string
    while (arr[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length - 1);
    }
    prefix = "null";
}
console.log("the longest common prefix is " + prefix);

// console.log('abcd'.indexOf('abc'));

