const { AsyncLocalStorage } = require("async_hooks");

function sum(a, b) {
    return a + b;
}
const ans=sum(1,2);
console.log(ans);

//Arrow function

const arrowSum=(a,b)=>{
    return a+b;
}

console.log(arrowSum(1,2));
