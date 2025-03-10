let array = [1, 2, 3, 4, 5];
let newArray = new Array("Sujal","Yug");   // We can also create a array using new keyword and both are of type object
console.log(typeof array);                 // object
console.log(typeof newArray);              // object

console.log(array); // [1, 2, 3, 4, 5]
console.log(array[0]); // 1


array.push(6,8);
console.log(array); // [1, 2, 3, 4, 5, 6, 8]

array.pop();
console.log(array); // [1, 2, 3, 4, 5, 6]

array.unshift("Sujal");
console.log(array); 

array.shift();
console.log(array);

console.log(array.includes(3)); // true
console.log(array.includes(10)); // false
console.log(array.indexOf(3)); // 2


let array1 = [1, 2, 3, 4, 5];
console.log(array1.join());     // This will give a string of array elements separated by comma
console.log(typeof array1.join()); 



console.log(array1.slice(1, 4));
console.log(array1.splice(1,3,6,7,8)); // This will remove the elements from 1 to 3 and add 6,7,8 at their place this will return the removed elements and changes the original array
console.log(array1);


