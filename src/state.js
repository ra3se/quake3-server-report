// TODO: create sessions for every init event and store data for each session?
// TODO: remove gamedig dependency
const _ = require("lodash");
const crypto = require("crypto");
const { WORLD } = require("./lib/constant/world");

const hash = string =>
	crypto
		.createHash("md5")
		.update(string)
		.digest("hex");

module.exports = () => {
	const state = {};
	let data = {};

	const eventHandler = {
		connect: ({ playerIndex, player: name, ip }) => {
			data.activePlayers += 1;
			const player = state.findPlayer(playerIndex, ip);
			player.name = name;
		},
		disconnect: ({ playerIndex }) => {
			data.activePlayers -= 1;
			const player = state.findPlayer(playerIndex);
			player.index = null;
			player.connected = false;
		},
		info: clientInfo => {
			const player = state.findPlayer(clientInfo.playerIndex);
			if (player && !_.isEmpty(clientInfo)) {
				if (clientInfo.n) {
					player.name = clientInfo.n;
				}
				Object.assign(player, clientInfo);
			}
		},
		init: initData => {
			state.reset();
			data = Object.assign(data, initData);
			data.status = "online"; // TODO: Use rcon for this
		},
		kill: ({ attacker, attackerIndex, targetIndex }) => {
			const attackerPlayer = state.findPlayer(attackerIndex);
			const targetPlayer = state.findPlayer(targetIndex);

			if (
				attacker === WORLD ||
				(attackerIndex === targetIndex && targetPlayer)
			) {
				targetPlayer.score -= 1;
				targetPlayer.deaths += 1;
			} else if (attackerPlayer && targetPlayer) {
				attackerPlayer.kills += 1;
				attackerPlayer.score += 1;
				targetPlayer.deaths += 1;
			}
		}
	};

	state.reset = () => {
		data = {
			activePlayers: 0, // Every active player currently online
			players: [], // Every player that joined this session
			mapname: "unknown",
			status: "offline"
		};
		return state;
	};

	state.get = (path, defaultValue) =>
		_.cloneDeep(path ? _.get(data, defaultValue) : data) || defaultValue;

	state.update = (event, data) =>
		eventHandler[event] && eventHandler[event](data);

	state.findPlayer = (playerIndex, ip) => {
		if (playerIndex == null) {
			return;
		}

		let player = data.players.find(({ index }) => playerIndex === index);

		if (ip && !player) {
			player = {
				id: hash(ip),
				index: playerIndex,
				name: player,
				connected: true,
				kills: 0,
				deaths: 0,
				score: 0
			};
			data.players.push(player);
		}

		return player;
	};

	state.reset();

	return state;
};
