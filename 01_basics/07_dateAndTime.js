// ******************* Dates ***********************
let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());

let newDate = new Date("05-03-2025")
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleDateString());


//**************** Time ************************
let time = Date.now();
console.log(time);

let date1 = new Date("2025-03-05");
console.log(date1.getTime());         
console.log(date1.getDate());
console.log(date1.getDay());            // We can also change the format of these methods
console.log(date1.getFullYear());

