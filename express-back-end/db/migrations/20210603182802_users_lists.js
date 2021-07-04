exports.up = function (knex) {
  return knex.schema.createTable('users_lists', (t) => {
    t.increments().primary();
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    t.string('list_title').notNullable();
    t.string('category').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users_lists');
};
