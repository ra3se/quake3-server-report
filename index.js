const fs = require('fs');
const path = require('path');

const config = Object.freeze(JSON.parse(
	fs.readFileSync(path.resolve(__dirname, 'config.json'), {encoding: 'utf8'})));

const state = require('./src/state');
const inputHandler = require('./src/lib/input-handler');
const serverEventEmitter = require('./src/lib/server-event-emitter');

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
const logger = console.log;

stdin(inputHandler(serverState));

if (config.udp) {
	udp(inputHandler(serverState))
}

// Print events to terminal
stdout(serverEventEmitter, logger);

// Start database reporter
if (config.database) {
	database(config.database, serverEventEmitter, logger);
}

// Start statsd reporter
if (config.statsd) {
	statsd(config.statsd, serverEventEmitter, serverState, logger);
}

// Start websocket server
if (config.websocket) {
	websocket(config.websocket, serverEventEmitter, logger);
}

if (config.discord) {
	discordHook(config.discord, serverEventEmitter, logger);
}

// Start discord client
// if (config.discord && !config.debug) {
// 	discord(config.discord,
// 		query(config.server), serverEvents, serverState);
// }
