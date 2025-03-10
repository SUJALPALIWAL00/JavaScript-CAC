// Stack and Heap Memory is the type of memory that is used to store data in the computer's memory.
// Stack memory is used by primitive data types and Heap memory is used by non-primitive data types.
// Stack memory is faster and more efficient than Heap memory.

/*Stack Memory */
let name = "Sujal"
let secondName = name

secondName = "Kamal"
console.log(name, secondName) 


/*Heap Memory */ 
let objone = {
    name: "Sujal",
    age: 21
}

let objtwo = objone
console.log(objtwo.name, objone.name);

objtwo.name = "Kamal"       // Here objone.name is also change bcz objone is passed as a reference to objtwo
console.log(objtwo.name, objone.name);
