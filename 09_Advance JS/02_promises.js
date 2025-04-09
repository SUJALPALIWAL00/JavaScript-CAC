// Promises are consumed by the fx like .then .catch .finally          
// .then is for resolve 
// .catch is for reject
// and .finally run always either it is reject or resolve 

let promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 1 completed");  
        resolve()
    },1000)
})

promise1.then(()=>{
    console.log("Async task 1 consumed with .then");
    
})



// Promise without holding it in a variable
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2 completed");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async task 2 consumed with .then");
})



let promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username: "Sujal",id: "SP123"})
    },1000)
})

promise3.then((user)=>{
    console.log(user);
    console.log(`The Username of user is ${user.username}`);
    
})

let promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let err = false
        if (err){
            reject("ERROR: Something wents wrong")
        }
        else{
            resolve({name: "SujalPaliwal", age: 21})
        }
    },1000)
})

promise4.then((user)=>{
    return user.name
}).then((name)=>{
    console.log(`This name of user is ${name}`);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("This will always run");
})

// We can also handle this with async await rather than .then .catch 

let promise5 = new Promise(function(resolve,reject){
   setTimeout(() => {
    let err = true
    if(err){
        resolve("Promise 5 resolved succesfully")
    }
    else{
        reject("Promise 5 not resolved ")                   // If the code enters in this block then async function will not able to handle this so we have to use a try catch block inside the async fx
    }
   }, 1000);
})


async function consumePromise5() {
    try{
        let response = await promise5
        console.log(response);
    }
    catch(err){
        console.log(err);
        
    }

    
}
consumePromise5()


// *************************************************
async function getData(){
   try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data =  await response.json()
        console.log(response);
        console.log(data);
        
   } catch (error) {
    console.log("E: ", error);
    
   }
}
getData()


// We can do the same by .then or .catch
fetch("https://jsonplaceholder.typicode.com/uses")
.then((value)=>{
    console.log(value);
    console.log(".then wala");
})
.catch((err)=>{
    console.log(err);
    console.log(".catch wala");
    
})