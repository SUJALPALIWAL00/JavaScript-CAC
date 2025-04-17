class user{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

class teacher extends user{
   constructor(name, subject){
    super(name)
    this.subject = subject
   }
}

let u1 = new user("Kem",19)
let t1 = new teacher("alyx", "Biology")

console.log(u1);
console.log(t1);
