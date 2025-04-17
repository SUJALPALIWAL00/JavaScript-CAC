// After ES6 we can use classes
class Person {
    constructor(name,email,password ){
        this.name = name
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return this.password + "abc"
    }
    changeUsernameCase(){
        return this.name.toUpperCase()
    }
}
let p1 = new Person("Sujal","abc@google.com",123)
console.log(p1);
console.log(p1.encryptPassword());
console.log(p1.changeUsernameCase());


// Behind the scene | Under the Hood Working | How this we can do the same before the evolvement of classes in js
function employee(name, email, password){
    this.name = name
    this.email = email
    this.password = password

}
employee.prototype.encryptPassword = function(){
    return this.password + "xyz"
}
employee.prototype.changeUsernameCase = function(){
    return this.name.toUpperCase()
}
let e1 = new employee("Akash", "Aki@fb.com", 69)
console.log(e1);
console.log(e1.encryptPassword());
console.log(e1.changeUsernameCase());


