let nuts = ["Hazel", "Chufa", "Peanut", "Almond", "Hickory"];
console.log(nuts[0]); // 'Hazel'
console.log(nuts[1]); // 'Chufa'
console.log(nuts[2]); // 'Peanut'
console.log(nuts[3]); // 'Almond'
console.log(nuts[4]); // 'Hickory'

nuts[1] = "Cashew"; //Replaces array element 1
nuts[4] = "Pecan"; //Replaces array element 4
nuts.unshift("Walnut"); //Adds a new array element upfront. Push adds to back
let lastnuts = nuts.pop(); // removes last end element in the array, shift () removes front element n the array.
console.log(lastnuts); //'Hickory'
console.log(nuts); //[ 'Walnut', 'Hazel', 'Cashew', 'Peanut', 'Almond' ] is the printed result for all.
