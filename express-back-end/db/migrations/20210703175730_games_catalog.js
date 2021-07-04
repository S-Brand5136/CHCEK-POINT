exports.up = function (knex) {
  return knex.schema.createTable('games_catalog', (t) => {
    t.increments().primary();
    t.string('name').notNullable();
    t.text('description').notNullable();
    t.string('background_image').notNullable();
    t.integer('playtime').notNullable();
    t.integer('metacritic_score').notNullable();
    t.date('released').notNullable();
    t.string('esrb_rating');
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('games_catalog');
};
