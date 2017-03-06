var express = require ("express");

var app = express(); 

app.get ("/", (req,res) =>{
  res.sendFile("signup.html",{root : "./"});
});


//Add a new route to your app.js file that handles the "/formsubmit" path by using app.post(...).

app.post ("/formsubmit", (req,res) =>{
  res.redirect('/success');
});

app.get ("/success", (req,res) =>{
  res.send("success!");
});


// start the server and listen for connections /requests
app.listen(3000, (res) =>{
  console.log("server running on port 3000!");
  
});
