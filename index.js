var express = require('express');
var app = express();
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config

// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('Connected to database: ' + config.db);
  }
});

app.get('*', function(req, res){
  res.send('hello world');
});

app.listen(8080,()=>{
    console.log('Listening on port 8080');
});