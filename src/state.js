// TODO: create sessions for every init event and store data for each session?
// TODO: remove gamedig dependency
const crypto = require('crypto');
const { WORLD } = require('./lib/constant/world');

const hash = (string) => crypto.createHash('md5').update(string).digest('hex');

const findPlayer = (playerIndex, ip) => {
	if (playerIndex == null) {
		return;
	}

	let player = state.players.find(({index}) => playerIndex === index);

	if (ip && !player) {
		player = {
			id: hash(ip),
			index: playerIndex,
			name: player,
			connected: true,
			kills: 0,
			deaths: 0,
			score: 0,
		};
		state.players.push(player);
	}

	return player;
}

let state = {
	activePlayers: 0, // Every active player currently online
	players: [], // Every player that joined this session
	mapname: 'unknown',
	status: 'offline',
};

module.exports = () => {
	const eventHandler = {
		shutdown: () => {
			state.activePlayers = 0;
			state.players = [];
		},
		connect: ({playerIndex, player: name, ip}) => {
			state.activePlayers += 1;
			const player = findPlayer(playerIndex, ip);
			player.name = name;
		},
		disconnect: ({playerIndex}) => {
			state.activePlayers -= 1;
			const player = findPlayer(playerIndex);
			player.index = null;
			player.connected = false;
		},
		info: ({playerIndex, n: name }) => {
			const player = findPlayer(playerIndex); // Sometimes happens before "connect"
			if (player) {
				player.name = name;
			}
		},
		init: data => {
			state = Object.assign(state, data);
			state.status = "online";
		},
		kill: ({attacker, attackerIndex, targetIndex}) => {
			const attackerPlayer = findPlayer(attackerIndex);
			const targetPlayer = findPlayer(targetIndex);

			if (attacker === WORLD || attackerIndex === targetIndex && targetPlayer) {
				targetPlayer.score -= 1;
				targetPlayer.deaths += 1
			} else if (attackerPlayer && targetPlayer) {
				attackerPlayer.kills += 1;
				attackerPlayer.score += 1;
				targetPlayer.deaths += 1;
			}
		}
	};

	state.update = (event, data) =>
		eventHandler[event] && eventHandler[event](data);

	state.getPlayerByIndex = index =>
		state.players.find(player => player.index === index);

	return state;
};
