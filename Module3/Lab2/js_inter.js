//Exercise 1 issue here. doesnt keep rest the same
function ucFirstLetters(test)
{
    let array = test.split('');
    let newarray = [];

    for(let x=0; x < array.length; x++){
        newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
    }
    return newarray.join(' ');
}
console.log(ucFirstLetters("los angeles") ) //Los Angeles

//Exercise 2
function truncate(str,length) {
   return (str.length > length)?
   str.slice(0, length - 1) + '...' : str;
}
console.log(truncate('This text will be truncated if it is too long', 19)) /// no issues.. do partt b later
// This text will be truncat...
//Exercise 3//
const animals = ['Tiger', 'Giraffe']
animals.push('Gorilla', 'Fly')
animals.unshift('Zebra', "Yak")
animals.sort()
const replaceMiddleAnimal= animals.splice(2, 2, 'Otter')
console.log(replaceMiddleAnimal)
console.log(animals)
const findMatchingAnimals= animals.slice(0)
console.log(findMatchingAnimals) //Seems to return all the values//

// Exercise 4
// const camelCase= ["How fat will you go?"]
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display
// console.log(string.toUpperCase())  Correct the code later. SOmething is bugging

//Exercise 5//

// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004 <====Thsi works

const twentyCents=.20; //needed values//
const tenCents=.10;
let fixedTwenty = twentyCents.toFixed(2); //Not an integer needs to convertt to .20//
let fixedTen = tenCents.toFixed(2); //Not an integer// needs to convert to .10
console.log(fixedTwenty + fixedTen) //why is this not working? Combeack to probelm,  sometign is off.

// Exercise 6
// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// const uni= ['uni',1,2,3,4,5,6,7,8]
// const unique = uni.filter((value, index, array) => array.indexOf(value) === index);
// console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]<==== Something is breaking this

//Exercise 7//
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
    let bookTitle = books.find(book => book.id == '2')
    console.log(bookTitle)
    let getOldBooks = books.filter(book => book.year < 1950)
    console.log(getOldBooks)
    //let addGenre = books.map(book => book.genre (classic))
    //console.log(addGenre)//  something broken here
   // let Genre = books.map(function genre(addGenre) { //
   //     {return caches.Genre}
   // })
   // console(Genre) Soemthign is off Check p52
   let Awriter = books.filter(book => book.author) //someth gis off
   console.log(Awriter)
   let dates = books.find(book => book.year == 1925)
   console.log(dates)
   //books.forEach((book, year)) Broken?
   //console.log({year},{book}) Borken?
//Exercise 8
const phoneBookABC = new Map() //an empty map to begin with
for (let contacts of phoneBookABC) { console.log(contacts);}
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
phoneBookABC.set('Caroline', '9999666666')
console.log(phoneBookABC)

const phoneBookDEF = new Map()
for (let contact of phoneBookDEF) { console.log(contact);}
phoneBookDEF.set('Danny', '1234567890')
phoneBookDEF.set('Eabha', '1369129631')
phoneBookDEF.set('Fanny', '9876543210')
console.log(phoneBookDEF)
const phonebookAF = [].concat(phoneBookABC, phoneBookDEF) //seems to have worked//
console.log(phonebookAF)

// //Exercise 9
// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
//     };
// const salariies = salaries.reduce((Total, Salary) => Total + Salary.salaries,0)something broke

//Exercise 10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getSeconds() + ' seconds have passed so far today')

function agecalc(dob) { 
    let diff = Date.now() - dob.getTime();
    let currentage = new Date(diff); 
  
    return Math.abs(currentage.getUTCFullYear()-1996);
}

console.log(agecalc(new Date(2025, 12, 2)) + ' years, 8 months and 3 days old'); //Pnly issue apears to be numbers ends. Did I do D?