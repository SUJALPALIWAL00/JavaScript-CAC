let name = "Sujal"
let age = 21

console.log(name + " is " + age + " years old")    
console.log(`${name} is ${age} years old`)        // This is called template literals

let a = new String("Sujal")    // This is called string object
console.log(typeof name, typeof a);

console.log(name.toUpperCase());
console.log(name.indexOf("j"));
console.log(name.charAt(2));



const movie = new String("The Dark Knight")
console.log(movie);

console.log(movie.substring(4, 9));
console.log(movie.slice(4, 9));


const receiptNo = "acb23-01-sc" 
console.log(receiptNo.split("-"));      
console.log(typeof receiptNo.split("-"));     // This will return an object not an array

let str = "      Hello     World    "
console.log(str.trim());        // This will remove the extra spaces from the stringfrom both the sides not from the middle
console.log(str.replace("Hello", "Hi"));
console.log(str.includes("Hello"));



