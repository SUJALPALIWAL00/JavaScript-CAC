// Objects

const user = {
    name : "Sujal",
    age : 21,
    "email" : "sujalpaliwal@gmail.com",
    isLoggedIn : true,

}

console.log(user.name);
console.log(user["name"]);

// We can also add the new key value pair in the object
user["address"] = "Delhi"
console.log(user);

// We can also change the value of the existing key in the object
user.email = "sujalpaliwal@google.com"
console.log(user);

// Object.freeze(user);  // This will freeze the object and we can't add or change the value of the object
user.email = "sujalpaliwal@amazon.com"      // This will not change the value of the email bcz we have freeze the object
console.log(user);

user.greetings = function(){
    console.log("Hello user");
}

user.greetings2 = function(){
    console.log(`Hello ${this.name}`);
}
    
user.greetings()
user.greetings2()



