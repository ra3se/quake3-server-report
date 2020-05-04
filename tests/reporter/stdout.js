const o = require('ospec');
const stdout = require('../../src/reporter/stdout');

o.spec('stdout reporter with colour support', () => {
	let logger;
	let serverEvents;
	let serverState;

	/**
	 * @param {string} eventName
	 */
	function findListener(eventName) {
		const listener = serverEvents.on.calls.find(call => call.args[0] === eventName);
		return listener && listener.args;
	}

	o.beforeEach(() => {
		logger = o.spy();
		serverEvents = {on: o.spy()};
		stdout(serverEvents, serverState, logger);
	});

	o('listen to events', () => {
		o(serverEvents.on.callCount).equals(4);

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
		o(logger.args[0]).equals('\u001B[37mProtons \u001B[37mshould have used a smaller gun \u001B[39m\u001B[37m\u001B[39m');
	});

	o('kill event with three parts', () => {
		const [, callback] = findListener('kill');

		callback({messageParts: ['Electron', 'was electrocuted by', 'Protons']});

		o(logger.callCount).equals(1);
		o(logger.args[0]).equals('\u001B[37mElectron \u001B[37mwas electrocuted by Protons\u001B[39m\u001B[37m\u001B[39m');
	});

	o('kill event with four parts', () => {
		const [, callback] = findListener('kill');

		callback({messageParts: ['Electron', 'was blasted by', 'Protons', '\'s BFG']});

		o(logger.callCount).equals(1);
		o(logger.args[0]).equals('\u001B[37mElectron \u001B[37mwas blasted by Protons\u001B[37m\'s BFG\u001B[39m\u001B[37m\u001B[37m\u001B[39m\u001B[37m\u001B[39m');
	});
});
