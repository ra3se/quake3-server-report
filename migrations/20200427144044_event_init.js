exports.up = function(knex) {
  return knex.schema.createTable('event_init', function (table) {
		table.increments();
		table.json('data');
		table.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex) {
  return knex.schema.dropTable('event_init');
};
