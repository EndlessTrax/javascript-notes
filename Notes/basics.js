/*
    Notes from JavaScript Basics Course on Team TreeHouse
*/

// Alert
alert('Add message here');

// Write a mesage to web page
document.write('<h1>This is adds HTML H1 to webpage</h1>');

// Write log to the console
console.log('This is a console log message');

// Basic variable - Assign var on init only
var score = 0;
// can have unassigned value
var top_score;

// Reuse variable
score = 100;

// Variables cannot start with a number or contain special character except '_' and '$'.
// Cannot use Keywords in variable naming. See list for reserved keywords: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

var message = 'Hello ';
message += 'World!';
console.log(message); // Reads 'Hello World!'

// Converting strings to numbers
var number = '10';
parseInt(number); 

var pie = '3.14';
parseFloat(pie);

// Is not a number
isNaN();

// Find the length of an object with...
var len = 'It is this long';
console.log(len.length);

// Math objects
// Rounding numbers methods
Math.round(2.2); // Outputs 2 
Math.round(3.9); // Outputs 4
Math.floor(3.9); // Outputs 3
Math.ceil(2.2); // Outputs 3

// Random method
// Gives a number between 0 and 1 (but not including 1)
Math.random(); // Gives a random number

// Dice rolls are annoying...
// Use .floor to round down then add one to get 1 - 6. If use .ceil to round up, you can still roll a 0.
var roll = Math.floor(Math.random() * 6) + 1; // Gives dice roll 1 - 6

//
// Equality Operators
//
// Three equals is strict. Compares type as well as value. The double equals doesn't.

1 === 1 // This is true
'1' == 1 // So is this. 
'1' === 1 // But not this

//
// Conditionals
//
// if and if/else statements do not have semicolons at the end!

if (condition === 'something') {
    // Do stuff
} else {
    // Do different stuff
}

// else if

if (condition) {
    // Some code
} else if (condition2) { 
    // More code
} else {
    // Do this instead
}

//
// Functions
//

function nameLikeThis() {
    // Function code here
    return 'Something'; // Can only return one thing! But can cacatinate.
} // No semicolon after curly braces

// Call the function
nameLikeThis();

// Anonymous functions. Has no function name. The name comes from the variable name. 
var name = function() {
    // some code
}; // Semicolon after anonymous function because its saved as a variable.


/*
    Loops, Arrays & Objects
*/

// While loop

var counter = 0;
while (counter < 10){
    document.write('Squirrel!!')
    counter += 1
} 
// no semicolon after

while (True) {
    break;
}

// Do While

do {
    // Code runs at least once

} while (condition)

// For Loop

for (var i = 0; i < 10; i+=1){
    // stuff to do
}

// Break!!

break // Guess what this does?

/*
    Horray for ARRAYS!
*/

// Declare
var nameOfArray = ['add', 'stuff', 4, true];

// Access
nameOfArray[0];
nameOfArray[3];

// Manipulation
nameOfArray.push('push'); // Adds to the end of the array
nameOfArray.unshift('unshift'); // Adds to the beggining of the array
nameOfArray.pop(); // Removes the last item of the array
nameOfArray.shift(); //Remove the first item of the array

// Both .pop and .shift return the value of the item they remove also.
var lastItem = nameOfArray.pop(); 
console.log(lastItem); // Will print hte value of the removed item.

// Join
nameOfArray.join(','); // logs out all the array items seperated by a ','. Can use other seperting values, eg. ';' '/'

// Concat
var moreNames = ['more', 'values', 'added'];
var newArray = nameOfArray.concat(moreNames); // concatenates two arrays, adding to the end of the initial array.

// Search
newArray.indexOf('values'); // Returns the index number of that value.
// if the value is not in the array, then the value returned will be '-1'.

/*
    Objects
*/

// Objects are actually key value pairs.
var someObject = {
    name: 'value',
    array: [3, 4, 5],
    bool: true,
} // Can hold any normal data type: strings, number, boolean, and arrays. Can nest objects, too.

// Access values - 2 ways - both valid.
someObject[name];
someObject.name;

// Change a value or create new items in the object with assignment operator.
someObject.name = 'new name';
someObject.party = 'woohoo!'; // New item

// FOR IN loops
// special loop just for objects...

for (var key in object) {
   console.log(object[key]);
}
// Only bracket notation will work in a for/in loop. Cannot use dot notation.











