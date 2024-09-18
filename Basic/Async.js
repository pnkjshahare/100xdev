function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
function sum() {
    console.log(findSum(100));

}
// setTimeout(sum, 2000);
// console.log("hello pankaj");

//**************Reading file from file system */
const fs = require("fs");
fs.readFile("text.txt", "utf-8", function (err, data) {
    console.log(data);

})
console.log("hii there");
let a = 0;
for (let i = 0; i < 1000000000; i++) {
    a++;
}
console.log("hii there2");