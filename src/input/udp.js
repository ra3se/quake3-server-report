const dgram = require('dgram');

module.exports = inputHandler => {
	const server = dgram.createSocket('udp4');

	server.on('error', (err) => {
		console.log(`server error:\n${err.stack}`);
		server.close();
	});

	server.on('message', (msg, rinfo) => {
		console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
		inputHandler(msg);
	});

	server.on('listening', () => {
		const address = server.address();
		console.log(`server listening ${address.address}:${address.port}`);
	});

	server.bind(514);
}
