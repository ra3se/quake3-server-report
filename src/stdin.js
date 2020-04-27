const EventEmitter = require('events');
const es = require('event-stream');
const serverEventHandler = require('./lib/server-event-handler');

module.exports = serverState => {
	const eventEmitter = new EventEmitter();

	process.stdin.setEncoding('utf8');

	process.stdin
		.pipe(es.split())
		.pipe(es.map(line => {
			const {event, data} = serverEventHandler(line);

			// Update state before events are emitted.
			serverState.update(event, data);

			eventEmitter.emit(event, data);
			eventEmitter.emit('any', {event, data});
			eventEmitter.emit('raw', line);
			return null;
		}))
		.pipe(process.stdout);

	process.stdin.on('end', () => {
		process.stdout.write('end');
	});

	return eventEmitter;
};
