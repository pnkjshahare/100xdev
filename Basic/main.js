let firstName = "pankaj";
let age = 21;
let isMarried = 1;
// console.log("my name is " + firstName + " and age is " + age);
if (isMarried) {
    // console.log(firstName + " married");

}
else {
    // console.log(firstName + " unmarried");

}

// loops
let answer = 0;
for (let i = 0; i <= 10; i++) {
    answer = answer + i;
}
// console.log(answer);


// array and object

const personArray = ['pankaj', 'pranay', 'puja'];
for (let i = 0; i < 3; i++) {
    // console.log(personArray[i]);

}

//print even no in arry

let array = [10, 20, 30, 40, 55, 50, 60];
for (let i = 0; i < array.length; i++) {
    if (!(array[i] & 1)) {
        // console.log(array[i]);
    }

}

// biggest no in array

let biggestNumber = 0;

for (let i = 0; i < array.length; i++) {
    if (biggestNumber < array[i]) {
        biggestNumber = array[i];
    }
}

// console.log('biggest no in array '+biggestNumber);


// complex object


const allUser = [{
    firstName: 'pankaj',
    gender: 'male'
}, {
    firstName: 'pranay',
    gender: 'male'
}, {
    firstName: 'puja',
    gender: 'female'
}]


for (let i = 0; i < allUser.length; i++) {
    if (allUser[i]['gender'] == 'female') {
        // console.log(allUser[i]['firstName']);

    }

}

// Function 


function sum(a, b) {
    return a + b;
}

const value = sum(1000, 20);
// console.log(value);


function addition(n1, n2, fnToCall) {
    let result = n1 + n2;
    fnToCall(result);
}

function displayAnswer(data) {
    console.log('Answer is '+data);

}

const value1 = addition(10, 20, displayAnswer);
