let score = 100; // number data type

let scoreString = "100"; // string data type
let scoreString2 = "100abc"; // if we try to convert this string to number it will give NaN (Not a Number) because it contains non-numeric characters

console.log(typeof score);
console.log(typeof scoreString);

// conversion

let valueInNumber = Number(scoreString); // convert string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(typeof scoreString2);

// "33" => 33
// "33abc" => NaN
// "abc33" => NaN
// "abc" => NaN

let isLoggedIn = 1; // number data type
let isLoggedInBoolean = Boolean(isLoggedIn); // convert number to boolean

let check=33;

let checkstring=String(check);
console.log(typeof check);

console.log(typeof isLoggedInBoolean);
console.log(isLoggedInBoolean);

// 1 => true
// 0 => false
// any other number => true
// "" => false
// " " => true
// null => false
// undefined => false
