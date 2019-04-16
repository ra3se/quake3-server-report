const WebSocket = require('ws');

/**
 * Responsible for sending and reciving websocket information.
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param {any} config - Websocket configuration
 */
module.exports = (serverEvents, {port}) => {
	const wss = new WebSocket.Server({port});

	wss.broadcast = function (data) {
		wss.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify(data));
			}
		});
	};

	wss.on('connection', (ws, req) => {
		const ip = req.connection.remoteAddress;
		console.log('websocket client connected', ip);
	});

	serverEvents.on('any', wss.broadcast);
};
