const input = [10, 20, 30, 40, 50];
for (let i = 0; i < input.length; i++) {
    // input[i] = input[i] * 2;
}

// console.log(input);

function transform(i){
    return i*2;
}
const ans=input.map( (i)=>{
    return i*2;
});
// console.log(ans);


//******************* Filter */
// for(let i=0;i<input.length;i++){
//     if(input[i]%2==0){
//         console.log(input[i]);
        
//     }
// }

const EvenNo=input.filter((i)=>{
    if(i%2==0){
        return true;
    }
    else{
        return false;
    }
})

console.log(EvenNo);
