var express = require('express'),
  PORT = 3000,
  app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Seville, where Magellan departed Spain in 1519. Next he sailed to Canary Islands!</h1><form method="post" action="/submit"><input type = submit> Go to Canary Islands!</form> ")
});

app.post('/click', (res, req) =>{
  res.redirect('/canaryislands');
});








app.listen(PORT, (res) => {
  console.log('server is on port 3000!');
});