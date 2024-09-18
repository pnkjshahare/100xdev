// async function
const { log } = require("console");
const fs = require("fs")
function pankajReadFile() {
    return new Promise(function (resolve) {
        fs.readFile("text.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    })
}
function onDone(data) {
    console.log(data);

}
// pankajReadFile().then(onDone);
function pankajFile() {
    let p = new Promise(function (resolve) {
        resolve("hii pankaj");
    });
    return p;
}
// async function main(){
// let value=await pankajFile();
// console.log(value);
// }
function main() {
    pankajFile().then(function (value) {
        console.log(value);

    });
}
main();

