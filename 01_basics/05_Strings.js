const name = "Abhishek";
const age = 21;

console.log(name + age + "value");// older way to concatenate string and number

// newer way to concatenate string and number using template literals
console.log(`my name is ${name} and my age is ${age}`);  // we create placeholder and inject variable here

// string declaration usinh key value pair

const Datavalues = new String('Abhishek') // string declaration using key value pair
console.log(Datavalues[0]);

// string methoda
console.log(Datavalues.charAt(4));
console.log(Datavalues.length);
console.log(Datavalues.toUpperCase());
console.log(Datavalues.toLowerCase());
console.log(Datavalues.indexOf('h'));

// substring method
const newstring = Datavalues.substring(0,6);
console.log(newstring);

// slice method
const newstring2 = Datavalues.slice(0,6);
console.log(newstring2);

const newstring3 = Datavalues.slice(-6,4); // slice method start from end and end at 0
console.log(newstring3); // empty string cause slice method start from end and end at 0



// split / splice method
const newstring4 = Datavalues.split(' ');   // split method split string into array of substrings based on a specified separator
console.log(newstring4); // ['Abhishek'] cause there is no space in string


// trim method
const newsng5 = "   Abhishek   ";
console.log(newsng5); //   Abhishek
console.log(newsng5.trim()); // trim method remove whitespace from both ends of a string

// replace method
const url = "https://www.google.%30com";
console.log(url); // https://www.google.%30com
console.log(url.replace('%30', '-')); 

// includes method 
// chek spesific string or value is present in string or not
const url2 = "https://www.google.com";
console.log(url2.includes('Abhishek'));
console.log(url2.toUpperCase());
console.log(url2.includes('GOOGLE')); // case sensitive

// split method
const str = "The brown dog playing in the park";
const words = str.split(' '); // split method split string into array of substrings based on a specified separator
console.log(words); // ['The', 'brown', 'dog', 'playing', 'in', 'the', 'park']
console.log(words[4]);

const chars = str.split("");
console.log(chars);

const stringcopy = str.split(); // split method without separator will return the original string in an array
console.log(stringcopy); // ['The brown dog playing in the park']




// ----------------- 