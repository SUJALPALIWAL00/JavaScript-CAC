// Primitive Data Types
// There are 7 primitive data types in JavaScript: string, number, BigInt, Boolean, undefined, symbol, and null.

let name = "John";
let age = 30;
let height = 1.75;
let bigNumber = 1234567890123456789012345678901234567890;
let isMarried = false;
let isNull = null;
let isUndefined = undefined;
let symbol = Symbol("123");         //Symbol is a unique They are always different from each other. Even if you create a symbol with the same description, they are still different.
let symbol2 = Symbol("123");

console.log(symbol == symbol2); // Output: false
console.log(symbol === symbol2); // Output: false


console.log(name, age, height, bigNumber, isMarried, isNull, isUndefined, symbol);
console.log(typeof name, typeof age, typeof height, typeof bigNumber, typeof isMarried, typeof isNull, typeof isUndefined, typeof symbol);

// Non-Primitive Data Types (Reference Data Types)
// There are 3 non-primitive data types in JavaScript: object, array, and function.

let person = ["John", "Doe", "Sujal"];
let myobj = {
    name: "Sujal",
    age: 30
}
let fx = function () {
    console.log("Hello");
}

console.log(person, myobj, fx);
console.log(typeof person, typeof myobj, typeof fx);