const prettyPrint = require("../lib/pretty-print");
const summaryTable = require('../lib/summary-table');

/**
 * Responsible for printing server events to the terminal.
 *
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param serverState
 * @param {Function} logger - Function for printing to terminal
 */
module.exports = function(serverEvents, logger) {
	serverEvents.on("kill", ({ messageParts }) => {
		const [target, msg1, attacker, msg2] = messageParts;
		if (messageParts.length <= 0) {
			return;
		}

		logger(
			prettyPrint("^7", target, " ", "^7", msg1, " ", attacker, "^7", msg2)
		);
	});

	serverEvents.on("message", ({ player, message }) =>
		logger(prettyPrint("^7", player, "^7:^2 ", message))
	);

	serverEvents.on("round", ({roundIndex, roundTotal}) =>
		logger(prettyPrint("^7", `Round ${roundIndex} of ${roundTotal}`))
	)

	serverEvents.on("broadcast", ({ message }) => logger(prettyPrint(message)));

	serverEvents.on("summary", state =>
		logger(summaryTable(state, prettyPrint, {border: "gray", head: "red"}))
	);

	serverEvents.on("unknown", ({line}) => {
		logger(prettyPrint("unknown: ", "^3", line))
	})

	serverEvents.on("init", ({ mapname }) =>
		logger(prettyPrint("^7", "Map changed to ", mapname))
	);
};
