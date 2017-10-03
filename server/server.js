const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('new user created');

	socket.emit('newMessage', {
		from: 'mike',
		text: 'Hey , what\'s up',
		createdAt: 123
	});

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);
	});

	socket.on('disconnect', () => {
		console.log('user is disconnected');
	});
});

server.listen(port, () => {
	console.log(`server is up on port ${port}`);
});

module.exports = {app};