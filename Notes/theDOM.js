/*
    Document Object Model
*/

// Select and element and make an object
const myHeading  = document.getElementById('heading');

// Event Listener - Listening for a click. Then add a function as the second argument to tell it what to do when clicked.
myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
});

// Select a value from an input box - change the header to the value put in by the user
const myInput = document.getElementById('#my-input');
myInput.addEventListener(click, () => {
    myHeading.style.color = myInput;
});

// Select more than one element with .getElementsByTagName(). This returns an array.
const moreStuff = document.getElementsByTagName('p');

// Get items with the same class...
const myClass = document.getElementsByClassName('.class-name');

//  Query Selectors
const mySelector = document.querySelectorAll('li'); // Returns all elements in the document
const mySelector = document.querySelector('li'); // Returns just the first 'li' element in the document 
const mySelector = document.querySelectorAll('[title=Click Here]'); // <= how to query an attribute of an html element (note no double quotes around the attribute value)

// Text Content
const content = document.querySelector('h1');
content.textContent; // returns the content of H1
content.textContent = "New content"; // Changes the value of the content in the H1

// Inner HTML - Same as text.Content, but can supply html tags to change contents too.
const inner = document.querySelector('ul');
inner.innerHTML;
inner.innerHTML = "<li>new item</li>";

/*
    Add / Remove elements
*/

// Create element
let newEle = document.createElement('li'); // Take a string argument to creat the required HTML tag.

// Add Node. This is done by appending to to a parent element. The new element will be a child of that parent. 
let list = document.getElementsByTagName('ul')[0]; // Returns a collection, so [0] selects first in the collection. 
list.appendChild(newEle);

// Remove element
list.removeChild(newEle);

/*
    Read up on Event Bubbling and Event Objects
*/

// Parent Node
// Sometimes you might need to transverse the element in order to remove it of perform an eventListener.
let child = getElementById('#removeMe');
let parent = child.parentNode;
parent.removeChild(child);

// Children Node
parent.childrenNode;

// Previous Sibling
child.previousElementSibling;

// More Traversal
parent.firstElementChild;
parent.lastElementChild;

//