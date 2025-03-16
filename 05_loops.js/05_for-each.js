// for each loop takes a callback function as an argument and runs that callback function on each element of the array.
// The callback function takes the current element, the index of the current element, and the array itself as arguments.
let arr = ["India", "USA", "Japan", "Russia", "China"];


arr.forEach(function (item){
    console.log(item);
})

arr.forEach((item) => {
    console.log(item);
});

function print(item){
    console.log(item);
}
arr.forEach(print);  //Here we are passing the function as an argument so we don't need execute the function here | use print not print()

arr.forEach((element, index, array) => {
    console.log(index, element, array)
});

//************* Array of objects************** */
let arrOfObjects = [
    {name: "John", age: 25},
    {name: "Den", age: 30},
    {name: "Jim", age: 35}
    ];

arrOfObjects.forEach((item)=>{
    console.log(item);
    console.log(item.name);
    
})

let obj = {
    name: "John",
    age: 25,
}
