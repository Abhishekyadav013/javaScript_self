const score = 450;
 console.log(score);

 const balance = 3000.50;
    console.log(balance);
// number method
    const balance2 = new Number(1000.9);
    console.log(balance2);
    console.log(balance2.toString().length);
    console.log(balance2.toFixed(1));
// precision method
    const otherBalance = 450.957;
    console.log(otherBalance.toPrecision(6))


    const hundreds = 1000000;
    console.log(hundreds.toLocaleString('en-IN'));
    

    //---------math method-------//

    // console.log(Math);// math is a built-in object that provides properties and methods for mathematical constants and functions.
    // console.log(Math.abs(-5)); // absolute value
    // console.log(Math.round(4.7)); // round to nearest integer
    // console.log(Math.ceil(4.5)); // round up to nearest integer
    // console.log(Math.floor(4.9)); // round down to nearest integer
    // console.log(Math.min(3,4,6));
    // console.log(Math.max(3,4,6));

    // console.log(Math.random()); // random number between 0 and 1
    // console.log(Math.random()*100); // random number between 0 and 100
    // console.log(Math.floor(Math.random()*100)); // random number between 0 and 100
    // console.log(Math.floor(Math.random()*100)+1); // random number between 1 and 100 

    console.log(Math.floor(Math.random()*10)+1); // random number between 1 and 10

    const min = 10;
    const max = 30;
//---------Important consept of random number between min and max------------//
    console.log(Math.floor(Math.random()*(max-min) + min)); // random number between 10 and 30
    console.log(Math.floor(Math.random()*(max-min + 1 ) + min)); 