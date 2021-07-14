exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments().primary();
    t.string('username').notNullable();
    t.string('password').notNullable();
    t.string('email').notNullable();
    t.string('avatar').notNullable();
    t.string('platforms');
    t.string('bio');
    t.string('in_game_usernames');
    t.string('pronoun');
    t.date('birthdate');
    t.string('timezone');
    t.string('discord_username');
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
