const amazonUser = new Object();
amazonUser.name = "Sujal";
amazonUser.age = 21;
amazonUser.email = "sujal@amazon.com",
amazonUser.isLoggedIn = true;
console.log(amazonUser);


const user = {
    name : "Sujal",
    age : 21,
    "email" : "sujal@gmail.com",
    isLoggedIn : true
}
console.log(user);

// We can also add a another object inside the object
const nestedObject = {
    fullName : {
        firstName : "Sujal",
        lastName : "Paliwal"
    },
    age : 21,
    email : "sujal@gmail.com"
    }    

console.log(nestedObject);
console.log(nestedObject.fullName.lastName);


// we can assign a values of the objects to the another object
const obj1 = {
    name : "Sujal",
    age : 21
}
const obj2 = {
    id : "123",
    email : "sujal@gmail.com"
}

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// We can also use the spread operator to assign the values of the objects to the another object
const obj4 = {...obj1, ...obj2};
console.log(obj4);



// Array of objects
const arrayOfObjects = [
    {
        name : "Sujal",
        age : 21
    },
    {
        name : "Aman",
        age : 22
    },
    {
        name : "Shubham",
        age : 23
    }
]
console.log(arrayOfObjects);
console.log(arrayOfObjects[0]);
console.log(arrayOfObjects[0].name);


// We can get keys and value of the object by
console.log(Object.keys(amazonUser));
console.log(Object.values(amazonUser));





// Object Destructuring and JSON

const course = {
    name : "JavaScript",
    language : "Hindi:",
    Price : 1000
}


const {name} = course;
console.log(name);
// We can also rename the object key
const {name : courseName} = course;
console.log(courseName);

//JSON
//JSON is same as the object but the key should be in double quotes and does not have name

// {
//     "name" : "Sujal",
//     "age" : 21,
//     "email" : "Sujalpaliwal@gmail.com"
// }

