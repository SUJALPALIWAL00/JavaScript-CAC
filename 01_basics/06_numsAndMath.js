// ************************ Numbers *******************************

let num = 34
console.log(num);

let float = 45.6
console.log(float);
console.log(float.toString());
console.log(float.toFixed(3));             // How much numbers will we want to see after .(point) in a floating point number

console.log(float.toPrecision(3));         // This will give the precised valu upto 3 digits and after that it will round off the other digits

let thounsand = 10000000000000
console.log(thounsand.toLocaleString('en-IN'));   // This will give the number in a comma separated format their are many other formats also according to the country like en-US, en-GB etc.



// *************************** Math *****************************
console.log(Math.abs(-34));    // Output: 34
console.log(Math.round(45.4));    // Output: 45
console.log(Math.round(45.5));    // Output: 46
console.log(Math.round(45.6));    // Output: 46
console.log(Math.ceil(45.1));    // Output: 46
console.log(Math.floor(45.9));    // Output: 45
console.log(Math.pow(2, 3));    // Output: 8
console.log(Math.min(2, 3, 4, 5));    // Output: 2
console.log(Math.max(2, 3, 4, 5));    // Output: 5



console.log(Math.random());    // Output: Random number between 0 and 1

console.log(Math.floor(Math.random()*10 + 1));    // Output: Random number between 1 and 10


const min = 10
const max = 20



// This syntax is used to generate a random number between a range
console.log(Math.random()* (max - min + 1) + min);    // Output: Random number between 10 and 20


