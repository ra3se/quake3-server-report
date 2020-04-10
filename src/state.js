let state = {
	players: [],
	map: 'unknown',
	status: 'offline'
};

module.exports = serverEvents => {
	serverEvents.on('shutdown', () => {
		state.players = [];
	});

	serverEvents.on('connect', ({playerIndex, player}) => {
		state.players.push({
			index: playerIndex,
			name: player
		});
	});

	serverEvents.on('disconnect', ({playerIndex}) => {
		state.players = state.players.filter(({index}) => playerIndex !== index);
	});

	serverEvents.on('init', data => {
		state = Object.assign(state, data);
	});

	state.getPlayerByIndex = index =>
		state.players.find(player => player.index === index);

	return state;
};
