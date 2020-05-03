const state = require('./src/state');
const inputHandler = require('./src/lib/input-handler');
const serverEventEmitter = require('./src/lib/server-event-emitter');

const config = require('./src/lib/config-parser');

// Inputs
const stdin = require('./src/input/stdin');
const udp = require('./src/input/udp');

// Reporters
const database = require('./src/reporter/database');
const discordHook = require('./src/reporter/discord-hook');
const statsd = require('./src/reporter/statsd');
const stdout = require('./src/reporter/stdout');
const websocket = require('./src/reporter/websocket');

// Gather events from stdin
const serverState = state();
stdin(inputHandler(serverState));

if (config.udp) {
	udp(inputHandler(serverState))
}

// Print events to terminal
stdout(serverEventEmitter, serverState, console.log);

// Start database reporter
if (config.database) {
	database(config.database, serverEventEmitter, serverState);
}

// Start statsd reporter
if (config.statsd) {
	statsd(config.statsd, serverEventEmitter, serverState);
}

// Start websocket server
if (config.websocket) {
	websocket(serverEventEmitter, serverState, config.websocket);
}

if (config.discord) {
	discordHook(config.discord, serverEventEmitter);
}

// Start discord client
// if (config.discord && !config.debug) {
// 	discord(config.discord,
// 		query(config.server), serverEvents, serverState);
// }
