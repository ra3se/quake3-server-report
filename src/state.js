// TODO: create sessions for every init event and store data for each session?
// TODO: remove gamedig dependency

let state = {
	players: [],
	mapname: 'unknown',
	status: 'offline',
};

module.exports = () => {
	const eventHandler = {
		shutdown: () => {
			state.players = [];
		},
		connect: ({playerIndex, player}) => {
			state.players.push({
				index: playerIndex,
				name: player
			});
		},
		disconnect: ({playerIndex}) => {
			state.players = state.players.filter(({index}) => playerIndex !== index);
		},
		init: data => {
			state = Object.assign(state, data);
		}
	};

	state.update = (event, data) =>
		eventHandler[event] && eventHandler[event](data);

	state.getPlayerByIndex = index =>
		state.players.find(player => player.index === index);

	return state;
};
