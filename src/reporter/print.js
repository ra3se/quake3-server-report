/**
 * Responsible for printing server events to the terminal.
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {function} logger - Function for printing to terminal
 */
module.exports = function (serverEvents, logger) {
	serverEvents.on('kill', ({messageParts}) => {
		logger(...messageParts);
	});
};
