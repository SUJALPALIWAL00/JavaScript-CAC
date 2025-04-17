// // We have to create a prototyple function to do the task given below we have to calculate actual length of the string by trimming white spaces  
// let name = "Sujal          "
// console.log(name.trim().length);



let name  = "RadheyShyam       "
let fname = "Ghanshyam              "
String.prototype.getActualLength = function(){
    console.log(this.trim().length)
}
name.getActualLength()
// console.log(fname.length);   // 23
fname.getActualLength()     // 9


// *****************Experimental Study********************
let str = "Nathdwara"
let myArray = ["Adam","Bob","Smit"]
let myobj = {
    name: "Sujal",
    age: 21
}

Object.prototype.sujal = function(){
    console.log("Sujal is present in all objects");
}

Array.prototype.aman = function(){
    console.log("Aman is only present for objects");
    
}

myArray.sujal()
str.sujal()
myobj.sujal()

myArray.aman()
// myobj.aman()



// ***************** Prototyple Inheritance ************************
const person = {
    name: "Sujal",
    age: 21
}
const student = {
    rollNo: 1
    }
const teacher = {
    subject: "Maths", 
    __proto__ : person              // old method
    }
    
console.log(teacher.subject);
console.log(teacher.name);

// console.log(student.rollNo);
// student.__proto__ = person          // old method     
// console.log(student.name);


Object.setPrototypeOf (student,person)
console.log(student.name);              // New Method 