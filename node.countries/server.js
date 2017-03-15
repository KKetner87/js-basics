var express = require ('express'),
    bodyParser = require("body-parser"),
    PORT = 3000,
    app = express();

app.use(
bodyParser.json(), 
bodyParser.urlencoded ({extended : true})
)

app.get ("/", (req, res) =>{
  console.log(req.query);
  res.sendFile("home.html", {root : './'});
});















app.listen(PORT,() => {
  console.log(`Server up and running on ${PORT}!`)
})