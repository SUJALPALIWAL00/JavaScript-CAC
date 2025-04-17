const pi = 3.14;
console.log(pi);

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const chai = {
    name: "MasalaChai",
    price: 60,
    isAvailable: true,

    chaibol: function(){
        console.log("Ek cutting chai");
    }
}

chai.chaibol()

let objdesc = Object.getOwnPropertyDescriptor(chai,"name")
console.log(objdesc);

Object.defineProperty(chai, "name",{
    writable: false,
})
objdesc = Object.getOwnPropertyDescriptor(chai,"name")
console.log(objdesc);

chai.name = "Green Tea"    // It does not change the value bcz we set its property false to writable 
console.log(chai);
