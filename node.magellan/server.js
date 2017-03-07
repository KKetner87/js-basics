
var express=require("express");
   bodyParser = require("body-parser");
   app= express(),
   PORT=3000;

app.use(
bodyParser.json(), 
bodyParser.urlencoded ({extended : true})
)


   
app.get('/',(req,res)=>{
  console.log(req.query);

res.sendFile("seville.html", {root : './'});

 
 });

 app.get('/Canary',(req,res)=>{
 
res.sendFile("canary.html",{root:'./'});
 
});


app.get('/Cape',(req,res)=>{
 
res.sendFile("cape.html",{root:'./'});
 
});

app.get('/Strait',(req,res)=>{
 
res.sendFile("strait.html",{root:'./'});
 
});

app.get('/Guam',(req,res)=>{
 
res.sendFile("guam.html",{root:'./'});
 
});

app.get('/Philippines',(req,res)=>{

 res.sendFile("philippines.html",{root:'./'});
  
});


//bonus: a /next route which will serve up a JSON response //

app.get('/next', (req, res) =>{
  
  res.redirect('/' + req.query.location);
  console.log(req.query);
})

//bonus: Add a route to handle an unknown destination. //
app.get('/:places', (req, res)=>{
  res.send(`Sorry! Magellan never traveled to ${req.params.places}! He missed out!`)
});











app.listen(PORT,()=>{
 
 console.log("Server is working");

});