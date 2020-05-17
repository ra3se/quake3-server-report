const eventEmitter = require("./server-event-emitter");
const serverEventHandler = require("./server-event-handler");

module.exports = serverState => row => {
	const { event, data } = serverEventHandler(row);

	// Trigger summary event before certain events
	if (event === "init" || event === "shutdown") {
		const summary = serverState.get();
		// Summarize to unique nicknames
		summary.players = summary.players
			.reduce((result, player) => {
				const p = result.find(p => p.name === player.name);
				if (p) {
					p.score += player.score || 0;
					p.deaths += player.death || 0;
					p.kills += player.kills || 0;
				} else {
					result.push(player);
				}
				return result;
			}, [])
			.filter(player => player.score || player.death || player.kills)
			.sort((a, b) => b.score - a.score);

		if (summary.players.length >= 2) {
			eventEmitter.emit("summary", summary);
		}

		serverState.reset();
	}

	// Update state before events are emitted.
	serverState.update(event, data);

	eventEmitter.emit(event, data);
	eventEmitter.emit("any", { event, data });
	eventEmitter.emit("raw", row);
};
