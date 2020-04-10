const EventEmitter = require('events');
const es = require('event-stream');
const serverEventHandler = require('./lib/server-event-handler');

module.exports = function () {
	const eventEmitter = new EventEmitter();

	process.stdin.setEncoding('utf8');

	process.stdin
		.pipe(es.split())
		.pipe(es.map(line => {
			const {event, data} = serverEventHandler(line);
			eventEmitter.emit(event, data);
			eventEmitter.emit('any', {event, data});
			return null;
		}))
		.pipe(process.stdout);

	process.stdin.on('end', () => {
		process.stdout.write('end');
	});

	return eventEmitter;
};
