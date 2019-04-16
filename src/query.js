const Gamedig = require("gamedig");

module.exports = function(type, host, port) {
	let cache;
	let last;

	return () => new Promise(function(resolve, reject) {
		if (last && cache && (Date.now() - last) < 10e3) {
			return resolve(cache);
		}

		Gamedig.query({
			type: type,
			host: host,
			port: port,
		}, function(err, state) {
			if (err) { return reject(err) }

			last = Date.now();
			cache = state;
			return resolve(state);
		});
	});
}
