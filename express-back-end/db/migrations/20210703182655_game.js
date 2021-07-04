exports.up = function (knex) {
  return knex.schema.createTable('game', (t) => {
    t.increments().primary();
    t.integer('list_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users_lists')
      .onDelete('CASCADE');
    t.integer('game_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('games_catalog')
      .onDelete('CASCADE');
    t.integer('num_hours_played');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('game');
};
