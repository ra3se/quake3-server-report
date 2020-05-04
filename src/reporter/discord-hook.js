const Discord = require("discord.js");
const stripColor = require("../lib/strip-colors");

/**
 * Hook documentation:
 * https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html
 *
 * @param config
 * @param serverEvents
 */
module.exports = function(config, serverEvents) {
	if (!config.hook) {
		return;
	}

	console.log("discord-hook reporter ready");

	const hook = new Discord.WebhookClient(config.hook.id, config.hook.token);
	let hookMessage = "";
	const hookLastMessage = Date.now();
	let hookTimeout;

	/**
	 * Only send messages to discord every 5 seconds
	 *
	 * @param {string} message - String that will be sent to discord
	 */
	function hookSend(message) {
		if (message) {
			hookMessage += `${hookMessage.length > 0 ? "\n" : ""}${message}`;
		}

		if (hookTimeout) {
			clearTimeout(hookTimeout);
		}

		if (Date.now() - hookLastMessage > 5e3) {
			hook.send(hookMessage);
			hookMessage = "";
		} else {
			hookTimeout = setTimeout(hookSend, 1e3);
		}
	}

	serverEvents.on("connect", ({ player }) => {
		hookSend(`${stripColor(player)} joined the server.`);
	});

	serverEvents.on("kill", ({ messageParts }) => {
		const [target, msg1, attacker, msg2] = messageParts;
		if (messageParts.length <= 0) {
			return;
		}

		hookSend(
			[target, " ", msg1, " ", attacker, msg2].reduce(
				(result, part) => `${result}${part ? stripColor(part) : ""}`,
				""
			)
		);
	});
};
