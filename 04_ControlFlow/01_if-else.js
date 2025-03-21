// if-else
let age = 20;
if (age >= 18) {
    console.log('You can drive');
}
else {
    console.log('You cannot drive');
}

// if-else-if ladder
let balance = 5000;
if (balance <= 1000) {                  // Operators used for condition <, >, <=, >=, ==, !=, ===, !==
    console.log('Ghar jaake paise lele');
} 
else if (balance > 1000) {
    console.log('You can buy a smartphone');
} 
else if(balance > 2000) {
    console.log('You can buy a smartwatch');
}
else {
    console.log('You can buy a laptop');
}

//Short hand if-else (Ternary operator)
let result = (age >= 18) ? 'You can drive' : 'You cannot drive';
console.log(result);



// We can also use logical operators in if-else like &&, ||, !
let isLoggedIn = true;
let id = false;
let salary = 50020;

if (isLoggedIn && id && salary > 50000) {               
    console.log('You cannot apply for appraisals');
}
else if (isLoggedIn && id && salary <= 50000) {
    console.log('You can apply for appraisals');
}

