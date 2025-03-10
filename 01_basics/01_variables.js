const pi = 3.14
let name = "Binod"          // let is used for local scope      // Always use let and const instead of var
var number = 8874837434     // var is used for global scope
city = "Nathdwara"      //This is not recommanded to declare the variable like this.
let id                  // In js we can declare variable without initialize it. It will be undefined.

console.log(pi,name,number,city);

// pi = 123    //Cannot assign the value to the constant variable
name = "Aman"
number = 123
city = "pune"   
console.log(pi,name,number,city);


//This way we get the table of the variables as a index and value columns
console.table([pi,name,number,city])