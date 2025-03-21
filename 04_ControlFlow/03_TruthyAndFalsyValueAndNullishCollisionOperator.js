// Truthy are the value that are assumend to be true 
// Falsy are the value that are assumed to be false

let name = "Akash";
if (name){
    console.log("Executed");
}
if (8){
    console.log("Executed");

}

// Truthy values
// "0", "false", " ", [], {}, function(){}

// Falsy Values
// 0, -0, null, undefined, NaN

//Checking that the array or the object is empty or not
let arr = []
let obj = {}

if (arr.length == 0){
    console.log("Array is empth!");
}
else{
    console.log("Array Not empty");
    
}

if(Object.keys(obj).length == 0){
    console.log("Object is empth!");

}
else{
    console.log("Object Not empty");
    
}





// Nullish Collision Operator (??) 
// Nullish Collision Operator is a logical operator that returns the right hand operand when the left hand operand is null or undefined , otherwise returns left hand operand. This is usefull when we want to give default value only the value is null or undefined.

let a = 5 ?? 10
let b = null ?? 20
let c = undefined ?? 30
let d = false ?? 40

console.log(a);
console.log(b);
console.log(c);
console.log(d);
