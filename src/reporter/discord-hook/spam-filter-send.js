module.exports = hook => {
	let pastMessages = [];
	let hookMessage = "";
	const hookLastMessage = Date.now();
	let hookTimeout;

	/**
	 * Only send messages to discord every 5 seconds
	 *
	 * @param {string} message - String that will be sent to discord
	 */
	return function awaitHookSend(message) {
		if (message && !pastMessages.find((x) => x === message)) {
			hookMessage += `${hookMessage.length > 0 ? "\n" : ""}${message}`;
		}

		if (hookTimeout) {
			clearTimeout(hookTimeout);
		}

		if (Date.now() - hookLastMessage > 5e3 && hookMessage.length > 0) {
			hook().send(hookMessage);
			// Remember the last 10 messages sent
			pastMessages = pastMessages.concat(hookMessage.split('\n')).slice(-10);
			hookMessage = "";
		} else {
			hookTimeout = setTimeout(awaitHookSend, 1e3);
		}
	}
}
