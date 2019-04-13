const WebSocket = require("ws");

module.exports = (serverEvents) => {
	const wss = new WebSocket.Server({port: 3031});

	// Broadcast to all.
	wss.broadcast = function broadcast(data) {
		wss.clients.forEach(function each(client) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify(data));
			}
		});
	};

	wss.on("connection", function connection(ws, req) {
		const ip = req.connection.remoteAddress;
		console.log("websocket client connected", ip);
	});

	serverEvents.on("any", wss.broadcast);
}
