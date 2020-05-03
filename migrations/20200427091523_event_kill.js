exports.up = function (knex) {
	return knex.schema.createTable('event_kill', table => {
		table.increments();
		table.string('attacker');
		table.string('target');
		table.string('weapon');
		table.integer('attacker_index');
		table.integer('target_index');
		table.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('event_kill');
};
