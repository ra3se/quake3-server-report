/**
 * @param {object} config - Statsd configuration
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {object} serverState - Current server state
 */
module.exports = function(config, serverEvents, serverState) {
	console.log("Initialize database connection", config);
	const knex = require("knex")(config);

	const catchError = promise => promise.catch(e => console.error);

	serverEvents.on("init", data =>
		catchError(knex("event_init").insert({ data: JSON.stringify(data) }))
	);

	serverEvents.on(
		"kill",
		({ attackerIndex, targetIndex, attacker, target, mod }) =>
			catchError(
				knex("event_kill").insert({
					attacker: attacker,
					target: target,
					weapon: mod,
					attacker_index: attackerIndex,
					target_index: targetIndex
				})
			)
	);

	serverEvents.on("raw", line =>
		catchError(knex("event_raw").insert({ line }))
	);
};
