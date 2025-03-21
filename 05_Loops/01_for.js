// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// // Nested for-loop
// for(let i = 1; i <= 10; i++){
//     console.log(`Table of ${i}`);

//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
//     console.log("\n");
// }


// // Iteratign over an array using for-loop
// let array = ["Shubham","Rahul","Kamal","Rohan"]
// for(let i = 0 ; i<array.length ;i++){
//     console.log(array[i]);
// }

// break and continue statement
for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}