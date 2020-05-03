const stream = require('stream');

module.exports = inputHandler => {
	process.stdin.setEncoding('utf8');
	const streamToEvents = new stream.Writable({
		write(chunk, encoding, next) {
			inputHandler(chunk);
			next();
		}
	});
	process.stdin.pipe(streamToEvents);
};
