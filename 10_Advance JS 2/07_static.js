// Static keyword in js is used to create a method that is belong only from the class not for the instancse

class user {
    constructor(name) {
        this.name = name;
        }
    greet(){
        console.log(`Hello ${this.name}`);
    }
    static info(){
        console.log("This is a static method only accessed by the class | its instances cannot access this method");
        
    }
}

let user1 = new user("John")
console.log(user1);
user1.greet();
// user1.info()   // this will throw an error because user1 cannot acces the static method of the class
user.info()

