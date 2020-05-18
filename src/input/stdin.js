const es = require("event-stream");

module.exports = inputHandler => {
	process.stdin.setEncoding("utf8");

	process.stdin
		.pipe(es.split()) // Split chunks on "\n"
		.pipe(
			es.map(function(data, cb) {
				//turn this async function into a stream
				cb(null, inputHandler(data));
			})
		).on('end', () => {
			inputHandler('ShutdownGame:'); // Trigger a shutdown to generate summary
		});
		// TODO: Refactor stdout reporter to be used with data returend from inputHandler.
		// .pipe(process.stdout);
};
