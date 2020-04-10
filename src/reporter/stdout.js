const prettyPrint = require('../lib/pretty-print');

/**
 * Responsible for printing server events to the terminal.
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {function} logger - Function for printing to terminal
 */
module.exports = function (serverEvents, serverState, logger) {
	serverEvents.on('kill', ({messageParts}) => {
		const [target, msg1, attacker, msg2] = messageParts;
		if (messageParts.length <= 0) {
			return;
		}

		logger(prettyPrint('^7', target, ' ', '^7', msg1, ' ', attacker, '^7', msg2));
	});

	serverEvents.on('message', ({player, message}) =>
		logger(prettyPrint('^7', player, '^7:^2 ', message)));

	serverEvents.on('connect', ({player}) =>
		logger(prettyPrint('^7', player, '^3 joined the server')));

	serverEvents.on('init', ({mapname}) =>
		logger(prettyPrint('^7', 'Map changed to ', mapname)));
};
