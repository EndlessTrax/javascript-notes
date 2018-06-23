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

// The getJSON method is almost identical to the .get method. The data arg is optional. 
// Callback function takes the arg 'response'
$.getJSON(url, data, callback);

// Can use .each function in jQuery as a way to iterate through the JSON objects returned. 
$.each(response, function(index, value){
    // Do stuff!
});

// Sending data to the server with POST.
$.post(url, data, callback);

// When sending form data you can use jQuery to fetcha all the fields automatically and encodes with .serialize.
$(this).serialize();

// You can set the url arg for the .post method by selectibg the html action attribute. 
$(form).attr('action');

// The callback function can be done with the .submit method.
// function(response, e){
//     e.preventDefault();
//     $(form).submit();
// };

// The ajax method is the daddy of jQuery ajax methods.
// Check docs for all the different settings available. Settings is a JS object.
$.ajax(url, settings)

// example...
$.ajax(myurl, {
    type: "POST",
    data: myData, // Data can be anything needed to send. In this case it is info from a var. 
    sucess: function(response) {
        // success takes a function as the value. This is the callback function for the ajax request.
    }
})

// The other methods are good but restrictive. The .ajax function is flexiable and takes a lot of settings. 
// .fail() can be chained to ajax method. It takes a fuction for callback. This will run if ajax request fails. 
// .fail =cCannot be used on .load() function, but all others.
// .The callback function takes a XHR arg. === .fail(function(jqXHR){});


