var express = require('express');
var socket = require('socket.io')

// initialize(set up) App
var app = express();
// spine up a web server
var server = app.listen(4000, () => console.log('Listening to requests on port 4000'))

// Static files
app.use(express.static('public'))

// Socket setup
var io = socket(server);

io.on('connection', socket => {
	console.log('made socket connection', socket.id)
	socket.on('chat', data => io.sockets.emit('chat', data))
})