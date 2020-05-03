const eventEmitter = require('./server-event-emitter');
const serverEventHandler = require('./server-event-handler');

module.exports = serverState => chunk => {
	const {event, data} = serverEventHandler(chunk.toString());

	// Update state before events are emitted.
	serverState.update(event, data);

	eventEmitter.emit(event, data);
	eventEmitter.emit('any', {event, data});
	eventEmitter.emit('raw', chunk);
}
