const fs = require('fs');
const path = require('path');
const query = require('./src/query');
const stdin = require('./src/stdin');

const discord = require('./src/reporter/discord');
const print = require('./src/reporter/print');
const websocket = require('./src/reporter/websocket');

const config = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, 'config.json'), {encoding: 'utf8'}));

// Gather events from stdin
const serverEvents = stdin();

// Print events to terminal
print(serverEvents, console.log);

// Start websocket server
websocket(serverEvents, config.websocket);

// Start discord client
if (!config.debug) {
	discord(config.discord,
		query(config.server), serverEvents);
}
