// Local and Global Scope
var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

if (true){
    var a = 100;
    let b = 200;
    const c = 300
    console.log(b);   // It prints 200 bcz it is in the local scope here
    
}
console.log(a);  // Here the value of a is 100 bcz var has global scope and it changes the variable globally
console.log(b);  
console.log(c);





//*********** Scope levels ************ */
function one(){
    let company = "Google";
    function two(){
        let country = "India";
        console.log(company);     //Here we can use comapny bcz it is defined in the scope of one() function
    }
    // console.log(country);      //It gives error bcz country is not drfined in the scope of one() function
    two();      
}
one();


if (true){
    let city = "Delhi";
    if (true){
        let country = "India";
        console.log(city);    
    }
    // console.log(country);    // It gives error  

}

//************* Mini hoisting ***************/
console.log(addOne(5));
function addOne(num){               // Syntax 1  |  Function declaration
    return num + 1;
}
// console.log(addOne(5));

console.log(addTwo(5));             // This gives error reason in line 61
const addTwo = function(num){       // Syntax 2  |  Function expression
    return num + 2;
}
// console.log(addTwo(5));

// In the syntax 1 we can call the function before the function declaration but in the syntax 2 we can't call the function before the function declaration bcz it is a function expression and it is stored in the variable and we can't call the variable before the declaration
// or in easy words we can say that the function declaration is hoisted but the function expression is not hoisted