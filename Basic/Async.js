// function findSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     return sum;
// }
// function sum() {
//     console.log(findSum(100));

// }
// setTimeout(sum, 2000);
// console.log("hello pankaj");

//**************Reading file from file system */
// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", function (err, data) {
//     console.log(data);

// })
// console.log("hii there");
// let a = 0;
// for (let i = 0; i < 1000000000; i++) {
//     a++;
// }
// console.log("hii there2");



//************** two types async 1. callback 2.promise */

// 1. callbaack


function myOwnsetTimeout(callbaack, duration) {
    setTimeout(callbaack, duration);
}

function onDone() {
    console.log("hiii from onDone");

}
myOwnsetTimeout(function () {
    console.log("hiii callback in function");
}, 1000);

// 2. promise
function myOwnsetTimeoutPromise(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
    return p;
}


// const ans = myOwnsetTimeoutPromise(1000);
// console.log(ans);
myOwnsetTimeoutPromise().then(onDone);


