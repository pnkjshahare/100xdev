function getLength(str) {
    console.log(str + ":" + str.length);
    return str.length;

}
// getLength("pankaj");


function findIndex(str,str1){
    console.log("first index :"+str.indexOf(str1));
    console.log("lastIndex:"+str.lastIndexOf(str1));
    

}

// findIndex("pankaj shahare shahare","shahare")
// console.log(index);
function getSlice(str,start,end){
    return str.slice(start,end);
}

// console.log(getSlice("pankaj",0,6));

let str="pankaj shahare from sggs";
let val=str.slice(2,10);
// console.log("slice string:"+val);

function getSubString(str,start,len){
    return str.substring(start,len);
}
let substr=getSubString("pankaj",0,6);
// console.log(substr);
 str="pankaj shahare";
// console.log(str.substring(0,12));

//*************** */
// console.log(str.replace("pankaj","pranay"));



//*******split the string based on delimeter into array */

str="pankaj,shahare,from sggs";
const word=str.split(",");
// console.log(word);

//****************trim use for extra space begining and end of string */
str="                  pankaj           shahare                  ";
// console.log(str.trim());

//************** lower case and upper case*/

str="pankaj shahare";
str=str.toUpperCase();
// console.log(str);
str=str.toLowerCase(str);
// console.log(str);


//**************parseInt ->string to int */
value="32400.0090"
 val=(parseFloat(value));
// console.log(typeof(val));
// console.log(typeof(value));
// console.log(val);

//****************array */
//1 push
let array=[1,2,3,4,5];
console.log(array);
// push-> push the element in last of aaray
array.push(10);
console.log(array);
//unshift->use for adding element front of aaray
array.unshift(10);
console.log(array);
// 2.pop
//pop->remove element from last of aaray
array.pop();
console.log(array);
//shift->remove from front of aaray
array.shift();
console.log(array);



