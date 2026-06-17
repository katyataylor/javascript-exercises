const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

// all the following string wrap formats work//
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// embedding variables

const name = "Kat";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Kat"

// joining variables

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

// multi-line strings - the backticks (template literals) allow multiple lines without defining linebreaks\

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

const bigmouth = 'I\'ve got no right to take my place…'; //the backslash eliminates the need fro quotation marks
console.log(bigmouth);

const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); // "Howdy, Ramesh" //concatenation using + using template literals = more readable code

//including expressions in strings

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

//Arrays

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping [0]);  
//console.log(shopping.length);  //5
//console.log(shopping[0]);      //result "bread"
//shopping[0] = "tahini"         //replaces "bread" with "tahini"

const random = ["tree", 795, [0, 1, 2]];
console.log(random);


const removeFromArray = function(newArray) {
  const array = [1,2,3,4];
  // const newArray = array.indexOf([3]);
  if (newArray !== -1) {
    array.splice(newArray, 2);
  }   
};
console.log(removeFromArray);
