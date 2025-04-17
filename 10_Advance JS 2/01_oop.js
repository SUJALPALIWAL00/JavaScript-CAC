let user = {
    name: "Sujal",
    age: 21,
    isLoggedIn: true,

    fx : function(){
        console.log("This is a function inside an object");
        console.log(`${this.name} is of ${this.age} years old`);
        
        return this
    }
}

console.log(user["name"]);        // If we have to access the object properties like this then we have to write name of the property in the quote ""
console.log(user.fx()); 
console.log(this);                // In node.js environment it show an empty object but in browser it gives          a window object


function createNewObject(name, age, isLoggedIn){
    this.name = name 
    this.age = age 
    this.isLoggedIn = isLoggedIn
    return this
}

let user1 = new createNewObject("Adam", 34, false)
console.log(user1.name);

let user2 = new createNewObject("Adi", 34, true)
console.log(user2.name);
// console.log(user1.name);            // Here it overwrite the value of the user1 is to resolve this we have to use this keyword
console.log(user2.constructor);
