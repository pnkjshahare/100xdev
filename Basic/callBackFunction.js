function squareOf(a) {
    return a * a;
}
function cubeOf(a) {
    return a * a * a;
}
function squareOfSomething(a, b, fn) {
    console.log(fn);

    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}
const ans = squareOfSomething(2, 2, squareOf);
// console.log(ans);

function addition(a, b) {
    return a + b;
}
function substraction(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

function calculator(a,b,fn,cbfn){
console.log(fn(a,b));
console.log(cbfn(a,b));
return 1;

}
const value=calculator(10,10,division,addition);
// console.log(value);
