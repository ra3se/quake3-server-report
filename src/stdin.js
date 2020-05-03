const eventEmitter = require('./lib/server-event-emitter');
const serverEventHandler = require('./lib/server-event-handler');
const stream = require('stream');

module.exports = serverState => {
	process.stdin.setEncoding('utf8');

	const streamToEvents = new stream.Writable({
		write(chunk, encoding, next) {
			const {event, data} = serverEventHandler(chunk.toString());

			// Update state before events are emitted.
			serverState.update(event, data);

			eventEmitter.emit(event, data);
			eventEmitter.emit('any', {event, data});
			eventEmitter.emit('raw', chunk);
			next();
		}
	});
	process.stdin.pipe(streamToEvents);
	return eventEmitter;
};
