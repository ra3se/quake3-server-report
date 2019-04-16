const prettyPrint = require('../lib/pretty-print');

/**
 * Responsible for printing server events to the terminal.
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {function} logger - Function for printing to terminal
 */
module.exports = function (serverEvents, logger) {
	serverEvents.on('kill', ({messageParts}) => {
		const [attacker, message, target, message2] = messageParts;
		logger(prettyPrint(`^7${attacker || ''} ${message || ''} ${target || ''}${message2 || ''}`));
	});

	serverEvents.on('message', ({player, message}) => {
		logger(prettyPrint(`^2${player}^2: ${message}`));
	});
};
