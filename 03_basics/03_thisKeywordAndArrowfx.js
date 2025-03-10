// // ??? i have a query that this.name and user.name are giving the same output.so why they called to use this keyword
// const user = {
//   name: "Sujal",
//   userName: "Sujal@000",
//   password: "1234",
//   welcomeMessageThis: function () {
//       console.log(`Hello ${this.name}, Welcome to the website`);
//   },
//   welcomeMessageUser: function () {
//       console.log(`Hello ${user.name}, Welcome to the website`);
//   }
// };

// user.welcomeMessageThis(); // Output: Hello Sujal, Welcome to the website
// user.welcomeMessageUser(); // Output: Hello Sujal, Welcome to the website

// user.name = "Aman";

// user.welcomeMessageThis(); // Output: Hello Aman, Welcome to the website
// user.welcomeMessageUser(); // Output: Hello Sujal, Welcome to the website



//
console.log(this);   // This return and empty object {} in node.js but in browser it returns window object


//
function one(name) {
    console.log(`Hello ${this.name}`);   // We can not use this keyword in function  | O/P: Hello undefined  
    console.log(`Hello ${name}`);
    console.log(this);
}
one("Sujal");

const two = function(name){
    console.log(`Hello ${this.name}`);   
    console.log(`Hello ${name}`);
    console.log(this);
}
two("Sujal");  


const three = (name) => {
    console.log(`Hello ${this.name}`);   
    console.log(`Hello ${name}`);
    console.log(this);                   // Here it gives the o/p as a empty object {} 
}
three("Sujal");  

// ******** Basic syntax of arrow function ************
const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(2, 3));  

const sum1 = (num1, num2) => num1 + num2;    // If we have only one line of code then we can remove the curly braces and return keyword
const sum2 = (num1, num2) => (num1 + num2);  // This also works
const sum3 = () => ({name: "Sujal"});  // If we want to return object then we have to wrap it in the parenthesis
c
