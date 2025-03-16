let arr = [1,2,3,4,5,6,7,8,9,10];

let newArr = arr.map((item)=> item*2);
console.log(newArr);

// Chaining of map and filter
let newArr2 = arr.map((item)=>item*2).map((item)=> item + 1).filter((item)=> item %3 == 0)
console.log(newArr2);