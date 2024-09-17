function squareOf(a) {
    return a * a;
}
function cubeOf(a){
    return a*a*a;
}
function squareOfSomething(a, b, fn) {
    console.log(fn);
    
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}
const ans=squareOfSomething(2,2,cubeOf);
console.log(ans);
