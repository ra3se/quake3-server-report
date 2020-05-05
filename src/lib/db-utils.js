const _ = require("lodash");
const format = require("date-fns/format");
const formatISO = require("date-fns/formatISO");

module.exports = knex => ({
	client: _.get(knex, "knex.context.client.config.client", "sqlite3"),
	/**
	 * @param {Date} date - date to convert
	 * @returns {string} - timestamp for desired knex database
	 */
	getTimestamp: function(date) {
		switch (this.client) {
			case "sqlite3":
				return format(date, "yyyy-MM-dd HH:mm:ss");
			default:
				return formatISO(date);
		}
	}
})

