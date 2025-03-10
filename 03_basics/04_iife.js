// Immediate invoked function expression [IIFE]

(function iife(name) {
    console.log(`Hello , ${name}`);
})("Sujal");

(() => {
    console.log("Hello");
})();


// IIFE is used to avoid the global scope pollution
 var name = "Sujal";
console.log(name);

 (function iife () {                    // Here fx name is optional 
    var name = "SujalPaliwal";
    console.log(name);
 })();
    
console.log(name);
    

