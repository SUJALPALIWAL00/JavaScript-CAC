let array = ["Shaktimnaan", "Sujal", "Yug", "Raj", "Rahul"];
let array1 = [1000, true];

// array.push(array1)
// console.log(array);

let newArray = array.concat(array1);  // This will concatenate the two arrays and return a new array
console.log(newArray);
 
// let allArray = [...array, ...array1];  // This method is called spread operator and it will concatenate the two arrays and return a new array
// console.log(allArray);


// let nestedArray = [1,2,3,4,[5,6,7,8,[9,10,[0,0],11,12]]];
// console.log(nestedArray.flat(1));           // flat method is used to flatten the nested array and it will flatten the array upto the level specified in the argument  | Means it will open the array innside the another array to create a simple array 
// console.log(nestedArray.flat(Infinity));    // Infinity will flatten the array to the maximum level


console.log(Array.isArray("Sujal"));   //false
console.log(Array.isArray(["Sujal"])); //true

console.log(Array.from("Sujal"))
console.log(Array.from(["Sujal","Aman"]))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

 


