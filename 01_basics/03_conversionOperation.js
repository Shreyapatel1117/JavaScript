let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);// even tho there is abc type will come as number


let score1 = null
console.log(score1);

// "33" => 33
// "33abc" => NaN(Not a Number)
// true => 1; false => 0;

let isLoggedIn = "shreya" // if null then false
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1- true
// 0- false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);

// ********************OPERATIONS*************************//

let value = 3
let negativeValue = -value
console.log(negativeValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = "Shreya"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 + 2); //string is first so output will be 122
console.log(2 + 2 + "1"); // int is first so output will be 41


let gameCounter = 100
gameCounter++; // ++gameCounter are same thing
console.log(gameCounter);




