let arr = ["India", "USA", "Japan", "Russia", "China"];
for (let key in arr){
    console.log(key);
}


let obj = {
    name: "Sujal",
    age: 24,
}
for (let key in obj){
    console.log(key);
}


// Maps 
let map = new Map();

map.set("IN","India");
map.set("US","USA")
map.set("JP","Japan")
map.set("IN","India");

for(let key in map){          // It prints nothing bcz for-in loop gives us index and the map has no index
    console.log(key);
}

