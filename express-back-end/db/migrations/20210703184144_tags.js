exports.up = function (knex) {
  return knex.schema.createTable('tags', (t) => {
    t.increments().primary();
    t.integer('game_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('games_catalog')
      .onDelete('CASCADE');
    t.string('tag_name');
    t.string('image_background');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tags');
};
