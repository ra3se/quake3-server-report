// const Discord = require("discord.js");

const stripColor = require("../../lib/strip-colors");
const discordHookClient = require("../../lib/discord-hook-client");
const summaryTable = require("../../lib/summary-table");
const spamFilterSend = require("./spam-filter-send");

const markdown = (syntax, string) => "```" + syntax + "\n" + string + "\n```";

/**
 * Hook documentation:
 * https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html
 *
 * @param {object} config
 * @param {EventEmitter} serverEvents
 * @param logger
 */
module.exports = function(config, serverEvents, logger) {
	if (!config.hook) {
		return;
	}

	logger("discord-hook reporter ready");

	const hook = () => discordHookClient(config.hook.id, config.hook.token);
	const sendMessage = spamFilterSend(hook);

	serverEvents.on("connect", ({ player }) => {
		sendMessage(`${stripColor(player)} connected`);
	});

	serverEvents.on("summary", state => {
		return hook()
			.content(
				[
					`Good game! :partying_face:`,
					markdown(
						"diff",
						"-  Player Stats\n" + summaryTable(state, stripColor)
					)
				].join("\n")
			)
			.embed({
				title: "Quick stats",
				thumbnail: {
					url: `https://raw.githubusercontent.com/ra3-se/artwork/master/levelshots/${state.mapname}.jpg`
				},
				description: [
					state.players
						.slice(0, 3)
						.map(
							(player, index) =>
								`:${
									index === 0 ? "first" : index === 1 ? "second" : "third"
								}_place: \`${stripColor(player.name)}\``
						)
						.join(" "),
					`**Server:** \`${stripColor(state.sv_hostname)}\``,
					`**Map:** \`${state.mapname}\``
				].join("\n")
			})
			.send();
	});
};
