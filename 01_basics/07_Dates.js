//------Dates-------//

const mydate = new Date(); // Date is a object in JavaScript interview question
// console.log(mydate.toString());
// // console.log(mydate.toISOString());
// // console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// // console.log(mydate.toLocaleTimeString());
//  console.log(mydate.toLocaleString());


//  let mydate2 = new Date(2026 , 0 , 23 , 5,30,45)
//  console.log(mydate2.toLocaleString());
//  console.log(mydate2.toLocaleDateString());


//  // ---- TimeStamp-----//
//  let mytimestamp = Date.now();
//  console.log(mytimestamp);
//  console.log(mydate2.getTime());
//  console.log(mydate2.getMinutes());
//  console.log(mydate2.getSeconds());

 let newTimestamp =  Date.now();
 console.log(newTimestamp);
 console.log(newTimestamp - mytimestamp); // time taken to execute code in milliseconds
 console.log(newTimestamp.getTime());
 console.log(Math.floor(Date.now()/10000)); // time in seconds