const fs = require('fs');
const path = require('path');
const stdin = require('./src/stdin');

const database = require('./src/reporter/database');
const state = require('./src/state');
const statsd = require('./src/reporter/statsd');
const stdout = require('./src/reporter/stdout');
const websocket = require('./src/reporter/websocket');

const config = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, 'config.json'), {encoding: 'utf8'}));

// Gather events from stdin
const serverState = state();
const serverEvents = stdin(serverState);

// Print events to terminal
stdout(serverEvents, serverState, console.log);

// Start database reporter
if (config.database) {
	database(config.database, serverEvents, serverState)
}

// Start statsd reporter
if (config.statsd) {
	statsd(config.statsd, serverEvents, serverState)
}

// Start websocket server
if (config.websocket) {
	websocket(serverEvents, serverState, config.websocket);
}

// Start discord client
// if (config.discord && !config.debug) {
// 	discord(config.discord,
// 		query(config.server), serverEvents, serverState);
// }
