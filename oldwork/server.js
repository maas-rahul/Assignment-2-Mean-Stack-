var express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
var app =express();

app.use(express.static(__dirname + "/public"));

// Configure bodyParser
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

//here we are calling the http server for controller.js

app.get('/api', (req, res) => {
    res.json({message : 'Hello World'});
  });

app.listen(3000);
console.log("Serevr running on port 3000");
