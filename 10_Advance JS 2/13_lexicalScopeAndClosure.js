// ********lexical Scope**************

function outer() {
  let name = "JavaScript"
  function inner() {
    console.log(name) 
  }
  inner()
}
outer()

function outer2(){
    let name = "Sujal"
    // console.log(language);               // It does not have acces to language
    function inner1() {
        let language = "Python"
        console.log(name);}
    function inner2() {
        let pc = "Mac"
        // console.log(language);          // It also does not have acces to language
    }
    inner1()
    inner2()
}
outer2()

function one(){
    console.log("fx one");
    function two(){
        console.log("fx two")
    }
    return two
    
}
let fx = one()  
fx() 


// *********Closure************
function closure(){
    let count = 0 
    function decrement(){
        count--
        console.log(count); 
    }
    return decrement
}

let a = closure()
a()
a()
a()
  