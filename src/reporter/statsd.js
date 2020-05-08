const StatsD = require('node-statsd');
const stripColor = require('../lib/strip-colors');

/**
 * Use statsd to store player statistic
 * https://github.com/statsd/statsd
 *
 * Structure for stats:
 * playerName.suicide
 * attackerPlayerName.kill.targetPlayerName.mapName.weaponName
 * targetPlayerName.death.attackerPlayerName.mapName.weaponName
 *
 * @param {object} config - Statsd configuration
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {object} serverState - Current server state
 * @param logger
 */
module.exports = function (config, serverEvents, serverState, logger) {
	logger('statsd reporter ready');

	const client = new StatsD(config);

	serverEvents.on(
		'kill',
		({attackerIndex, targetIndex, attacker, target, mod}) => {
			attacker = stripColor(attacker).replace('.', '');
			target = stripColor(target).replace('.', '');

			if (attackerIndex === targetIndex) {
				client.increment(`${attacker}.suicide`);
			} else {
				client.increment(`${attacker}.${target}.${mod}.${serverState.get('mapname')}`);
			}
		}
	);
};
