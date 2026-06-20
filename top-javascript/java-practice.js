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

//use indexOf() to find the index number of array item. if not in array indexOf returns -1
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

//push() to add items to index. unshift() to add to beginning of array
// const cities = ["Manchester", "Liverpool"];
// cities.push("Cardiff");
// console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
// cities.push("Bradford", "Brighton");
// console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

// //pop() to remove from array, shift() to remove first array item.
// const cities = ["Manchester", "Liverpool"];
// cities.pop();
// console.log(cities); // [ "Manchester" ]

// const cities = ["Manchester", "Liverpool"];
// const removedCity = cities.pop();
// console.log(removedCity); // "Liverpool"

// const cities = ["Manchester", "Liverpool"];
// cities.shift();
// console.log(cities); // [ "Liverpool" ]

//splice() to remove if you know indexOf item
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

const removeFromArray = function() {
  
};
console.log(removeFromArray);
