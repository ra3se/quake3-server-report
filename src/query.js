const Gamedig = require('gamedig');

/**
 * Query the game server directly for statistics
 * @param {any} config - Server configuration
 * @return {function} - Function that returns a promise
 */
module.exports = function ({type, host, port}) {
	let cache;
	let last;

	return () => new Promise((resolve => {
		if (last && cache && (Date.now() - last) < 10e3) {
			return resolve(cache);
		}

		return Gamedig.query({
			type,
			host,
			port
		}).then(state => {
			last = Date.now();
			cache = state;
			return state;
		});
	}));
};
