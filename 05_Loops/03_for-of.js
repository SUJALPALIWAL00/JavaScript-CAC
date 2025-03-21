// ******************for-of loop on array***********
let country = ['India', 'USA', 'Japan', 'Russia', 'China'];
for (let elements of country) {
    console.log(elements);
}


// ******************for-of loop on strings***********

let name = "Sujal Paliwal"
for (let char of name) {
    console.log(char);
}

// Maps 
let map = new Map();

map.set("IN","India");
map.set("US","USA")
map.set("JP","Japan")
map.set("IN","India");

console.log(map);           // It only prints unique keys-value pair only 

// ******************for-of loop on map***********

for (let keypair of map) {      // It prints every key value pair in different arrays
    console.log(keypair);
}

for (let [key,value] of map) {
    console.log(`${key} = ${value}`);
}

// ******************for-of loop on objects***********

const obj = {
    name: "Sujal",
    age: 24,
}
// for (let index of obj) {        // It will throw an error "object is not iterable"
//     console.log(index);
// }



