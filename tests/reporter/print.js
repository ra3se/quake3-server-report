const o = require('ospec');
const print = require('../../src/reporter/print');

// Function generateMocks () {
// }

o.spec('print', () => {
	let logger;
	let serverEvents;

	function findListener(eventName) {
		const listener = serverEvents.on.calls.find(call => call.args[0] === eventName);
		return listener && listener.args;
	}

	o.beforeEach(() => {
		logger = o.spy();
		serverEvents = {on: o.spy()};
		print(serverEvents, logger);
	});

	o('listen to events', () => {
		o(serverEvents.on.callCount).equals(2);

		['kill', 'message'].forEach(eventName => {
			const [name, callback] = findListener(eventName);

			o(name).equals(eventName);
			o(typeof callback).equals('function');
		});
	});

	o('empty kill event', () => {
		const [, callback] = findListener('kill');

		callback({messageParts: []});
		o(logger.callCount).equals(0);
	});

	o('kill event with two parts', () => {
		const [, callback] = findListener('kill');

		callback({messageParts: ['Protons', 'should have used a smaller gun']});

		o(logger.callCount).equals(1);
		o(logger.args[0]).equals('\u001B[37mProtons should have used a smaller gun \u001B[39m');
	});

	o('kill event with three parts', () => {
		const [, callback] = findListener('kill');

		callback({messageParts: ['Electron', 'was electrocuted by', 'Protons']});

		o(logger.callCount).equals(1);
		o(logger.args[0]).equals('\u001B[37mElectron was electrocuted by Protons\u001B[39m');
	});

	o('kill event with four parts', () => {
		const [, callback] = findListener('kill');

		callback({messageParts: ['Electron', 'was blasted by', 'Protons', '\'s BFG']});

		o(logger.callCount).equals(1);
		o(logger.args[0]).equals('\u001B[37mElectron was blasted by Protons\'s BFG\u001B[39m');
	});
});
