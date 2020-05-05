const _ = require("lodash");
const needle = require("needle");

/**
 * @typedef DiscordHookClient
 * @function content
 */

/**
 * Documentation https://discord.com/developers/docs/resources/webhook#execute-webhook
 *
 * @param {string} id - webhook id
 * @param {string} token - webhook token
 * @returns {DiscordHookClient} DiscordHookClient
 */
module.exports = (id, token) => ({
	data: {},
	/**
	 * Sets hook content
	 *
	 * @param {string} content - Content for hook
	 * @returns {DiscordHookClient} return hook
	 */
	content: function(content) {
		this.data.content = content;
		return this;
	},
	/**
	 * Embeded information in message
	 *
	 * @param {object} embed - embedded rich content
	 * @param {string} embed.title - title
	 * @param {string} embed.description - description
	 * @param {string} embed.url - url
	 * @param {string} embed.color - color
	 * @param {object} embed.author - author
	 * @param {string} embed.author.name - autor name
	 * @param {string} embed.author.url - author url
	 * @param {string} embed.author.icon_url - author avatar icon
	 * @param {object} embed.footer - footer
	 * @param {string} embed.footer.text - footer text
	 * @param {string} embed.footer.icon_url - footer avatar
	 * @returns {DiscordHookClient} return hook
	 */
	embed: function(embed) {
		this.data.embeds = this.data.embeds || [];
		if (this.data.embeds.length === 10) {
			throw new Error("Max number of embedded rich content is 10");
		}
		this.data.embeds.push(embed);
		return this;
	},
	/**
	 * Override default username
	 *
	 * @param {string} username - desired username
	 * @returns {DiscordHookClient} return hook
	 */
	username: function(username) {
		this.data.username = username;
		return this;
	},
	/**
	 * Override default avatar url
	 *
	 * @param {string} url - avatar url
	 * @returns {DiscordHookClient} return hook
	 */
	avatar: function(url) {
		this.data.avatar_url = url;
		return this;
	},
	/**
	 * Send webhook to discord
	 *
	 * @param {string} content - optional content
	 * @returns {Promise} Return promise
	 */
	send: function(content) {
		if (content) {
			this.content(content);
		}

		if (_.isEmpty(this.data)) {
			throw new Error("No data for discord webhook")
		}

		return needle(
			"post",
			`https://discordapp.com/api/webhooks/${id}/${token}`,
			this.data,
			{ json: true }
		)
			.then(() => {
				this.data = {};
				return null;
			})
			.catch(err => console.error(err));
	}
});
