/**
 * Responsible for printing server events to the terminal.
 */
module.exports = function(serverEvents, logger) {
	serverEvents.on("kill", ({messageParts}) => {
		logger.apply(null, messageParts)
	})
}
