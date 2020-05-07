const WebSocket = require('ws');
const _ = require('lodash');

/**
 * Responsible for sending and reciving websocket information.
 *
 * @param {object} config - websocket configuration
 * @param {EventEmitter} serverEvents - Incoming server events
 * @param logger
 * @param serverState
 */
module.exports = ({port}, serverEvents, logger) => {
	const wss = new WebSocket.Server({port});

	logger("Websocket listening on", port);

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
