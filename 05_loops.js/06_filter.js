let arr = [1,2,3,4,5,6,7,8,9,10];
let evenArr = arr.filter((element) => {
    return element % 2 == 0;
})
console.log(evenArr);

let newArr = arr.filter((element) => element % 2 == 0);
console.log(newArr);
let newArr2 = arr.filter((element) => {return element % 2 == 0});    // If we use {} then we have to use return keyword bcz we are using {} so it is a block of code
console.log(newArr2);

// Same thing can be done using for-each loop
let evenArr1 = [];
arr.forEach((element) => {
    if (element % 2 == 0) {
        evenArr1.push(element);
    }
})
console.log(evenArr1);  



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userFilterBooks = books.filter((book) => {
    return book.publish > 2000 && book.genre == 'science';
})
console.log(userFilterBooks);
