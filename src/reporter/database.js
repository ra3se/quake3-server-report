/**
 * @param {object} config - Statsd configuration
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {object} serverState - Current server state
 */
module.exports = function(config, serverEvents) {
	console.log("database reporter ready");

	const knex = require("knex")(config);

	const catchError = promise => promise.catch(console.error);
	let kills = [];

	// New session started
	serverEvents.on("init", () => {
		kills = [];
	});

	serverEvents.on("init", data =>
		catchError(knex("event_init").insert({ data: JSON.stringify(data) }))
	);

	serverEvents.on(
		"shutdown",
		() =>
			kills.length &&
			catchError(
				knex("event_kill")
					.whereIn("id", kills)
					.then(kills => {
						if (
							kills.filter(
								({ attacker_index, target_index }) =>
									attacker_index !== target_index
							).length > 0
						) {
							serverEvents.emit("kill_summary", kills);
						}
						return kills;
					})
			)
	);

	serverEvents.on(
		"kill",
		({ attackerIndex, targetIndex, attacker, target, mod }) =>
			catchError(
				knex("event_kill")
					.insert({
						attacker,
						target,
						weapon: mod,
						attacker_index: attackerIndex,
						target_index: targetIndex
					})
					.then(([id]) => kills.push(id))
			)
	);

	// Not working with mysql, too long lines.
	// serverEvents.on('raw', line =>
	// 	catchError(knex('event_raw').insert({line}))
	// );
};
