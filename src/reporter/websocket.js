const WebSocket = require("ws")
/**
 * Responsible for sending and reciving websocket information.
 */
module.exports = (serverEvents, port) => {
	const wss = new WebSocket.Server({port: port})

	wss.broadcast = function broadcast(data) {
		wss.clients.forEach(function each(client) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify(data))
			}
		})
	}

	wss.on("connection", function connection(ws, req) {
		const ip = req.connection.remoteAddress
		console.log("websocket client connected", ip)
	})

	serverEvents.on("any", wss.broadcast)
}
