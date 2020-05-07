const es = require("event-stream");

module.exports = inputHandler => {
	process.stdin.setEncoding("utf8");

	process.stdin
		.pipe(es.split())
		.pipe(
			es.map(function(data, cb) {
				//turn this async function into a stream
				cb(null, inputHandler(data));
			})
		)
		.pipe(process.stdout);
};
