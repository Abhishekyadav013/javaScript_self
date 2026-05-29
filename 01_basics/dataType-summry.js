// Two typs of data types in JavaScript: Primitive and Non-Primitive or ( Refrence Data type)

// Primitive data types: string, number, boolean, null, undefined, symbol
// Non-Primitive data types: object, array, function

// Primitive data types are immutable (cannot be changed) and are stored in stack memory
// Non-Primitive data types are mutable (can be changed) and are stored in heap memory

// Primitive data types are passed by value (copy of the value is passed) and Non-Primitive data types are passed by reference (reference of the value is passed)


//JAVA SCRIPT IS : DYNAMICALLY TYPED LANGUAGE (data type is determined at runtime) and WEAKLY TYPED LANGUAGE (type coercion is allowed)

// data types 

const score = 100; // number data type
const score1 = 100.5; // number data type
const scoreValue = "100"; // string data type

const isLoggedIn = false; // boolean data type
const outsideTemp = null; // null data type
let userEmail; // undefined data type


const id = Symbol("123"); // symbol data type
const anotherId = Symbol("123"); // symbol data type

console.log(id === anotherId); // false because symbol is unique

const Bignumber = 1234567890123456789012345678901234567890n; // bigint data ty pe

//Arry, object , functions //
const Games = ["crictet", "fotball", "hockey"]; // array data type
let object = {
    name:"Abhishek",
    age: 21,
    city: "indore"
}
const func = function(){
    console.log("hello world");
}
console.log(typeof outsideTemp);