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

const incOnPath = (object, path, amount) => _.set(object, path, _.get(object, path, 0) + amount)

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
		round: ({ roundIndex }) => {
			console.log('Round', roundIndex);
			if (roundIndex === "1") {
				state.resetPlayersStats();
			}
			_.set(state,'round', roundIndex)
		},
		kill: ({ attacker, attackerIndex, targetIndex }) => {
			const attackerPlayer = state.findPlayer(attackerIndex);
			const targetPlayer = state.findPlayer(targetIndex);

			// TODO: enable something like this for more advance statistics.
			// if (state.round && state.round !== 0 && attackerPlayer && targetPlayer) {
			// 	incOnPath(attackerPlayer, ['arena', arenaIndex, `team_${attackerPlayer.t}`, 'round', state.round, 'target', targetPlayer.name, 'weapon', mod], 1)
			// 	incOnPath(targetPlayer, ['arena', arenaIndex, `team_${targetPlayer.t}`, 'round', state.round, 'attacker', attackerPlayer.name, 'weapon', mod], 1)
			// }

			if (state.round != null && state.round !== "0") {
				if (
					attacker === WORLD ||
					(attackerIndex === targetIndex && targetPlayer)
				) {
					incOnPath(targetPlayer, ['score'], -1);
					incOnPath(targetPlayer, ['deaths'], 1);
				} else if (attackerPlayer && targetPlayer) {
					incOnPath(attackerPlayer, ['kills'], 1);
					incOnPath(attackerPlayer, ['score'], 1);
					incOnPath(targetPlayer, ['deaths'], 1);
				}
			}
		}
	};

	const resetPlayerStats = player => Object.assign(player, {
		kills: 0,
		deaths: 0,
		score: 0
	});

	state.resetPlayersStats = () => {
		data.players = (data.players || []).map(resetPlayerStats)
	}

	state.reset = () => {
		data = {
			activePlayers: 0, // Every active player currently online
			players: [], // Every player that joined this session
			mapname: "unknown",
			status: "offline",
			round: null
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
			player = resetPlayerStats({
				id: hash(ip),
				index: playerIndex,
				name: player,
				connected: true,
			});
			data.players.push(player);
		}

		return player;
	};

	state.reset();

	return state;
};
