/* eslint camelcase: ["off"] */

/**
 * @param {object} config - Statsd configuration
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {object} serverState - Current server state
 */
module.exports = function (config, serverEvents) {
	const knex = require('knex')(config);

	const catchError = promise => promise.catch(console.error);

	serverEvents.on('init', data =>
		catchError(knex('event_init').insert({data: JSON.stringify(data)}))
	);

	serverEvents.on(
		'kill',
		({attackerIndex, targetIndex, attacker, target, mod}) =>
			catchError(
				knex('event_kill').insert({
					attacker,
					target,
					weapon: mod,
					attacker_index: attackerIndex,
					target_index: targetIndex
				})
			)
	);

	serverEvents.on('raw', line =>
		catchError(knex('event_raw').insert({line}))
	);
};
