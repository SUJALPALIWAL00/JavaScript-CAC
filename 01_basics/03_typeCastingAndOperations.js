// ****************** Type Casting ******************
let number = 34
let float = 45.67
let boolean = true
let string = "56"
let string2 = "Sujal" 

console.log(number, float, boolean, string, string2);
console.log(typeof number, typeof float, typeof boolean, typeof string, typeof string2);

let strNumber = String(number)
let numBoolean = Number(boolean)
let numString = Number(string)
let numString2  = Number(string2)

console.log(strNumber, numBoolean, numString, numString2);
console.log(typeof strNumber, typeof numBoolean, typeof numString, typeof numString2);


// ****************** Operations ******************

console.log(2+3);    // Output: 5
console.log(2-3);    // Output: -1
console.log(2*3);    // Output: 6
console.log(2/3);    // Output: 0.6666666666666666
console.log(2%3);    // Output: 2
console.log(2**3);    // Output: 8


console.log(2+3-5*6/2);    // Output: -10
console.log(eval(2+3-5*6/2));    // Output: -10    // eval() is used to evaluate the expression
console.log(1 + true);   // Output: 2

console.log(1 + "1" + 3);     // Output: 113
console.log(1 + 3 + "1");   // Output: 41
console.log("1" + 3 + 1);   // Output: 131
console.log("1" + "3" + 1);  // Output: 131
console.log("1" + "3" + "1"); // Output: 131
console.log(1 + "3" + "1");  // Output: 131
console.log(1 + 3 + 1);  // Output: 5

let x = "1" + 2 + 3
console.log(x);   // Output: 123
console.log(typeof x);  



