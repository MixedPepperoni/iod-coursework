//Exercise 1
function makeCounter() {
    let currentCount = 1;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    let counter2 = makeCounter();
    counter1(); // 1
    counter1(); // 2
    console.log(`call${counter1.currentCount} 2 times`) //seems to work? but calls it undeifned

    //Exercise 2
    function delayMsg(msg)
    {
    console.log(`This message will be printed after a delay: ${msg}`)
    }
    setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); //last
    setTimeout(delayMsg, 20, '#2: Delayed by 20ms');// seccond to alst
    setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); //seond to star
    delayMsg(() => '#4: Not delayed at all')// modified, sort of works but extra bits. starts vs due to no delay
    let timeout = setTimeout(delayMsg,"hi") // haard to tell 
    clearTimeout(timeout)
 // exercise 3

//  function printMe() {
//    console.log('printing debounced message')
//    }
//    printMe = debounce(printMe, timeout=1000);{
//       let timer; return
//    } //create this debounce function for a)
//    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
//    setTimeout(printMe, 100);
//    setTimeout(printMe, 200);
//    setTimeout(printMe, 300); It broke
 
//Exercise 4
 
//COnfusion.//

//Exercise 5
let car = {
make: "Porsche",
model: '911',
year: 1964,
description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
setTimeout(car.description, 200); //fails