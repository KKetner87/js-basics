 require("colors");
 var express = require('express');
   bodyParser = require ('body-parser');
        PORT = 3000;
         app = express();


//bodyParser is used as middleware. If a request comes in with a request body, we want it to 
//run through bodyParser's middleware functions to turn the body into a usable object

//mounted middleware
app.use(
bodyParser.json(), //used for parsing stringified JSON
bodyParser.urlencoded ({extended : true}) // used for parsing url-encoded strings (*MUST*)
)



 app.get("/", (rep, res) => {
   
   console.log(req.query); // the parsed version of the query string. Only used on GET requests. 
   res.send("<h1>Hello World!</h1>");
   
 });

app.post('/submitUser', (req, res) =>{
  console.log(req.body);
 
  res.send(`Welcome back ${req.body.name}!`)
});


app.get('users/:username', (req, res)=>{
  res.send(`Welcome back ${req.params.username}`)
});




 app.listen(PORT, () => {
   console.log(`Server running on ${PORT}!`.rainbow);
 });