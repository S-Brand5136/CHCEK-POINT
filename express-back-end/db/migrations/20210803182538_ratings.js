exports.up = function (knex) {
  return knex.schema.createTable('ratings', (t) => {
    t.increments().primary();
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    t.integer('game_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('games_catalog')
      .onDelete('CASCADE');
    t.integer('rating').defaultTo(0);
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ratings');
};
