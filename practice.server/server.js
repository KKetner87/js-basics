var express = require('express'); //requiring express so we can use the module in this file

var app = express(); // Create an express app object to represent our server


//considered the 'home' page
// can only use one res at a time! Similar to a 'return' in a function.
app.get ("/", (req,res) =>{
//   res.send("<h1> Bring Mt Dew Tomorow</h1>");
  //.json()
  //.redirect()
  //.render()
  //.sendFile()
  res.sendFile("home.html",{root : "./"});
});

//routes and route handlers work very similarly to events /event handlers in the browser

app.get ("/about", (req,res) =>{
  console.log("Finding out about the page...")
  res.send("I like long walks on the beach!");
});


// start the server and listen for connections /requests
app.listen(3000, (res) =>{
  console.log("server running on port 3000!");
  
});

