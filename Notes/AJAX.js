// AJAX in the house!

/*
You need to do 4 things to do a successful AJAX request"

1. Create the XMLHTTP Request object
2. Create a callback function 
3. Open the request
4. Send the request
*/

// 1
var xhr = new XMLHttpRequest();

// 2
// Use 'onreadystatechange' to perform callbacll function when the state of the callback changes.
// Conditional statement used to check the 'readyState' of the object.
// The readyState will be a value of 0 - 4 with 4 being all information returned from the server.
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){

        // Conditional to check the status of the request (200, 404 etc). 
        if (xhr.statusText === 200){
            // Selects DOM elelment and replaces it's HTML with the request objects responseText 
            document.getElementById('sidebar').innerHTML = xhr.responseText;
        };
    };
};

// 3
// Use .open() to open the request. Takes method (get/post/put/delete) arg. Second arg for the file it's requesting.
xhr.open('GET', 'sidebar.html');

// 4
// Sends the request
xhr.send();

// Thw JSON sent by an API is actually a string that looks like JSON and cannot be interacted with as it's just a string.
// To change this we can parse the string and turn it to JSON.
var myObject = JSON.parse()

/*
    Using jQuery for simpler AJAX
*/

// Everything (almost) above but with one line of code instead!
// load() does what it says. It will load data from one a file.
$('#item').load('sidebar.html');

// Can use the get() method to retrieve data. It takes 3 args normally. 
$.get(url, data, callback);

// url is string.
var url = 'myurl.json' // can be a html file, script, or any endpoint. 
// data is JS object
var data = {
    name: "dave",
    age= 45
}
// callback is a function with arg 'response'
var callback = function(response){
    // Do something
};


