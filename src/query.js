const Gamedig = require('gamedig');

module.exports = function ({type, host, port}) {
	let cache;
	let last;

	return () => new Promise(((resolve, reject) => {
		if (last && cache && (Date.now() - last) < 10e3) {
			return resolve(cache);
		}

		Gamedig.query({
			type,
			host,
			port
		}, (err, state) => {
			if (err) {
				return reject(err);
			}

			last = Date.now();
			cache = state;
			return resolve(state);
		});
	}));
};
