const WebSocket = require('ws');
const _ = require('lodash');

/**
 * Responsible for sending and reciving websocket information.
 *
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param serverState
 * @param {any} config - Websocket configuration
 */
module.exports = (serverEvents, serverState, {port}) => {
	const wss = new WebSocket.Server({port});

	wss.broadcast = function (data) {
		wss.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify(_.omit(data, ['ip'])));
			}
		});
	};

	wss.on('connection', (ws, req) => {
		const ip = req.connection.remoteAddress;
		console.log('websocket client connected', ip);
	});

	serverEvents.on('any', wss.broadcast);
};
