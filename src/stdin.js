const EventEmitter = require('events');
// Const {inspect} = require('util');
const es = require('event-stream');
const serverEventHandler = require('./lib/server-event-handler');
const state = require('./state');

module.exports = function () {
	const eventEmitter = new EventEmitter();

	process.stdin.setEncoding('utf8');

	process.stdin
		.pipe(es.split())
		.pipe(es.map(line => {
			const {event, data} = serverEventHandler(line);
			// Cb(null, inspect({event, data}) + '\n');
			eventEmitter.emit(event, data);
			eventEmitter.emit('any', {event, data});
			return null;
		}))
		.pipe(process.stdout);

	process.stdin.on('end', () => {
		process.stdout.write('end');
	});

	eventEmitter.on('connect', ({playerIndex, player}) => {
		state.players[playerIndex] = player;
	});

	eventEmitter.on('disconnect', ({playerIndex}) => {
		if (state.players[playerIndex]) {
			delete state.players[playerIndex];
		}
	});

	eventEmitter.on('shutdown', () => {
		state.players = {};
	});

	return eventEmitter;
};
