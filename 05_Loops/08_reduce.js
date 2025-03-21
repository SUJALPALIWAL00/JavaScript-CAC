let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = arr.reduce((one, two) => {
//     return one + two;
// });
// console.log(sum); 

let sum = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0)
console.log(sum);

//Same by another way
let sum2 = arr.reduce((accumulator, currentValue)=> accumulator + currentValue,0);
console.log(sum2);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let total = shoppingCart.reduce((acc,item)=>acc + item.price,0);
console.log(total);