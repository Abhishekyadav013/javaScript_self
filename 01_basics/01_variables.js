// Used to store data  as a form for user data //

const accountId = 1234567890;
let accountEmail = "Abhishek@gmail.com";
var accountPassword = "12345";
accountCity = "indore";

/*
   in current time we dont use 
   var a = 10; // cause scope issue {} it cahnge all avlue 

   // insted we use let and const  to declare variable  cause they have block scope and value can be change in let but not in const
*/
// accountId = 89;   // not allowed const value camt change

accountEmail = "SA@gmail.com";
accountPassword = "21212";
accountCity = "bhopal";
let accountState;

console.log(accountId);

// usin [ ]. multiple values can be print at same time
// using console.table()  // values print in tabulure format
console.table([accountEmail, accountPassword, accountCity, accountState]);
