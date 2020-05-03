exports.up = function (knex) {
	return knex.schema.createTable('event_raw', table => {
		table.increments();
		table.string('line');
		table.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('event_raw');
};
