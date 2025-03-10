// Function Syntax
function greet(){
    console.log("Good Morning User");
}
greet();

// Function without return value
function sum(num1, num2){
    console.log(num1 + num2);
}
sum(10, 20);

// Function with return value
function add(num1, num2){
    return (num1 + num2);
}
add(10, 20);     // Here nothing will be printed because we are not using console.log we are only return the value 
console.log(add(10, 20));   // Value printed here

// We can also store the return value of the function in the variable
const result = add(100, 20);
console.log(result);


// Function with default parameters   
function goodEvening(name = "User"){         // If we dont have a default value and we are also not passing the value then it will print undefined
    console.log(`Good Evening ${name}`);
}
goodEvening();      






//******** Functions with Objects and arrays ********** */

function calcCartPrice(...p1){         // Here we are using rest operator to store the values in the array
    return p1;
}
console.log(calcCartPrice(10, 20, 50, 100));

//
const user = {
    userName: "Johndipa",
    password : "1234"
}

function getUserDetailsFromObj(obj){
    return `Username is ${obj.userName} and password is ${obj.password}`;
}
console.log(getUserDetailsFromObj(user));
console.log(getUserDetailsFromObj({userName: "Shravan", password: "6969"}));  // We can also pass the object directly


// // Function with object destructuring
// function getUserDetailsFromObj1({userName, password}){
//     return `Username is ${userName} and password is ${password}`;
// }
// console.log(getUserDetailsFromObj1(user));


// Function with array destructuring
const arr = [10, 20, 30, 40];
function getArrayData(array){
    console.log(array[0]);
    
}
getArrayData(arr);
getArrayData([100, 200, 300, 400]);