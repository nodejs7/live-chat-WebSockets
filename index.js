var express = require('express');

// initialize(set up) App
var app = express();
// spine up a web server
var server = app.listen(4000, () => console.log('Listening to requests on port 4000'))

// Static files
app.use(express.static('public'))