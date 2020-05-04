// const o = require("ospec");
// const discordHook = require("../../src/reporter/discord-hook");
// const nock = require("nock");

// const hook = {
// 	id: "706779060818149456",
// 	token: "SrcILC11K3Y5onBG_HoUPd-b-dCjwLmg8vwvBco2Tky6KNcSEw9Zciflw048CMTm9eVJ"
// }

// o.spec("discordHook reporter with colour support", () => {
// 	let serverEvents;
// 	// let xhrSpy

// 	/**
// 	 * @param {string} eventName - name of event
// 	 * @returns {Function} - Event listener spy
// 	 */
// 	function findListener(eventName) {
// 		const listener = serverEvents.on.calls.find(
// 			call => call.args[0] === eventName
// 		);
// 		return listener && listener.args;
// 	}

// 	o.beforeEach(() => {
// 		nock.disableNetConnect();
// 		// xhrSpy = o.spy();
// 		nock("https://discordapp.com")
// 			.post(`/api/webhooks/${hook.id}/${hook.token}`)
// 			.reply(function (uri, requestBody) {
// 				console.log(uri, requestBody);
// 				console.log('path:', this.req.path)
// 				console.log('headers:', this.req.headers)
// 				return 'Foobar';
// 			});
// 		serverEvents = { on: o.spy() };
// 		discordHook({ hook }, serverEvents);
// 	});

// 	o.afterEach(() => {
// 		nock.cleanAll();
// 		nock.enableNetConnect();
// 	});

// 	o("listen to events", () => {
// 		o(serverEvents.on.callCount).equals(2);

// 		["connect", "kill"].forEach(eventName => {
// 			const [name, callback] = findListener(eventName);

// 			o(name).equals(eventName);
// 			o(typeof callback).equals("function");
// 		});
// 	});

// 	// o('empty kill event', () => {
// 	// 	const [, callback] = findListener('kill');

// 	// 	callback({messageParts: []});
// 	// 	o(logger.callCount).equals(0);
// 	// });

// 	o('kill event with two parts', () => {
// 		const [, callback] = findListener('kill');

// 		callback({messageParts: ['Protons', 'should have used a smaller gun']});

// 		// o(xhrSpy.callCount).equals(1);
// 		// o(xhrSpy.args[0]).equals('\u001B[37mProtons \u001B[37mshould have used a smaller gun \u001B[39m\u001B[37m\u001B[39m');
// 	});

// 	// o('kill event with three parts', () => {
// 	// 	const [, callback] = findListener('kill');

// 	// 	callback({messageParts: ['Electron', 'was electrocuted by', 'Protons']});

// 	// 	o(logger.callCount).equals(1);
// 	// 	o(logger.args[0]).equals('\u001B[37mElectron \u001B[37mwas electrocuted by Protons\u001B[39m\u001B[37m\u001B[39m');
// 	// });

// 	// o('kill event with four parts', () => {
// 	// 	const [, callback] = findListener('kill');

// 	// 	callback({messageParts: ['Electron', 'was blasted by', 'Protons', '\'s BFG']});

// 	// 	o(logger.callCount).equals(1);
// 	// 	o(logger.args[0]).equals('\u001B[37mElectron \u001B[37mwas blasted by Protons\u001B[37m\'s BFG\u001B[39m\u001B[37m\u001B[37m\u001B[39m\u001B[37m\u001B[39m');
// 	// });
// });
