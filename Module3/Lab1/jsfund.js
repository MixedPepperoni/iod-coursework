// Exercise 1
"" + 1 + 0; //""= 0 in an empty spring.string(number) 1 is concatenated with 0=10.
console.log("" + 1 + 0);
"" - 1 + 0; //""= 0 in an empty spring.string(number) -1 is concatenated with 0=-10.
console.log("" + -1 + 0);
true + false; //should equal to 1.
console.log(true + false);
!true; //should equal false since ! is used tto check variable.
console.log(!true);
6 / "3"; // 2 since 6 is 1st in the string & "3" is "" wont be stroung and concatened like 6+3.
console.log(6 / "3");
"2" * "3"; //6. It will read as 2 *3, as they arent strung and concated together like 1+0.
console.log("2" * "3");
4 + 5 + "px"; //9px, the px is placed at the end which chould allow 4+5 to occur and then e concatenated wiith px.
console.log(4 + 5 + "px");
"$" + 4 + 5; //$45, string $ is concaened wiith 4 and 5. Order matters when no "" are present for numbers.
console.log("$" + 4 + 5);
"4" - 2; //2, "4" is first and seperaed so it wont string with 2 to make 42, it should read 4-2=2.
console.log("4" - 2);
"4px" - 2; //Nan. While sepreated "4px" isnt a number. Means no value can be gotten.
console.log("4px" - 2);
" -9 " + 5; //should be -9 5.They are strung togther into -9 & 5.
console.log(" -9 " + 5);
" -9 " - 5; // should be -14. The "-9" seperaes it so they are treated like -9-5, differs from above.
console.log(" -9 " - 5);
null + 1; // null is zero as a number value. should be 1.
console.log(null + 1);
undefined + 1; // underfined doesnt have a numerical value, so it cant be anything.
console.log(undefined + 1);
undefined == null;
console.log(undefined == null); // == is true and is used  to checka value's equivalence. === is false/ == is true.
undefined === null; // === is false and is used to check type quality. == is true & === is false.
console.log(undefined === null);
" \t \n" - 2; // -2. seem to be ingore and give vlaue of 0 or null, leaving only -2.
console.log(" \t \n" - 2);

//Exercise 2
let three = 3;
let four = 4;
let thirty = 30;
//what is the value of the following expressions?
let addition = three + four; //Wrong since it would string to 34, needs to be "three"+"four"=7 since 3+4.Removing "" so the numbers cna be read fixes it.
console.log(three + four);
let multiplication = three * four; //12 since 3*4.
console.log(three * four);
let division = three / four; //.75 since 3/4.
console.log(three / four);
let subtraction = three - four; //-1 since 3-4.
console.log(three - four);
let lessThan1 = three < four; //corret snce 3 is less than 4.
console.log(three < four);
let lessThan2 = thirty < four; // wrong, should be false. value of thirty either needs to be reduce below 4. Removing "" from numbers fixes it.
console.log(thirty < four);
//Seems the "" which creates these seperatrations doest function well with division and multpplication. Let values stand on their own.

//Exercise 3
if (0) console.log("#1 zero is true"); // ts zero has no value
if ("0") console.log("#2 zero is true"); // "" states string with 0.
if (null) console.log("null is true"); //null has no value to even print out.
if (-1) console.log("negative is true"); // has a value of -1.
if (1) console.log("positive is true"); // has a value of 1.

//Exercise 4
let a = 6,
  b = 4;
// let result = `${a} + ${b} is `; This is the orginal
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }
console.log(a + b < 10 ? "less than 10" : "greater than 10");
//+= adds one onto previous value.
//  a=7 and b=3 gives a value greater than 10. vs a=6/b=3.
//  a=5 and b=5 gives a value greater than 10. vs a=4/b=5.

//Exercise 5

/*function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
  console.log(getGreeting("Brendan")) This is Orignal function*/

/*    const getGreeting=function(name){
    return 'Hello ' + name + '!';
}
console.log(getGreeting("Brendan")) FUNCTION EXPRESSION SYNTAX  */

const getGreeting = (name) => {
  return "Hello " + name + "!";
};
console.log(getGreeting("Brendan")); //ARROW FUNCTION SYNTAX

//Exercise 6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastname: "Montoya ",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastname}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(_person) {
    if ((numFingers = 6)) {
      return "You killed my father. Prepare to die.";
    }
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen); //check 6 later/. Likely ask for hel on Sunday/

//Exercise 7//
const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  finalscore() {
    console.log(basketballGame + this.score); //something is broken here. correct later. loop ight work.
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

//Exercise 8//
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
for (let city in sydney) {
  console.log("City " + city);
  console.log("" + sydney[city]);
}
const richmond = {
  name: "Richmond",
  population: 230_000,
  state: "Virginia",
  founded: "3 May 1737",
  timezone: "U.S: Eastern",
};
for (let city in richmond) {
  console.log("City " + city);
  console.log("" + richmond[city]);
}

//Exercise 9//
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports;
teamSports.unshift("Soccer");
teamSports.push("Minecraft"); //might have erroe here. fiix.///
console.log(teamSports);
let dog1 = "Bingo";
let dog2 = "Mark";
console.log(dog1);
let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = cat1;
cat1.name = "Mittens";
cat1.breed = "Korat";
cat2.name = "Fluffy";
cat2.breed = "Siberian";
console.log(cat1);

// Exercise 10//
//    function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     }   Orginal

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  hasAge() {
    return this.age >= 16;
  }
}
let person1 = new Person("Mike", "23");
let person2 = new Person("Minnie", "13");
let person3 = new Person("Gabby", "19");
console.log(person1);
console.log(person1.hasAge());
console.log(person2);
console.log(person2.hasAge());
console.log(person3);
console.log(person3.hasAge());
