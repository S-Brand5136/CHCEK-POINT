exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments().primary();
    // t.integer('currently_playing')
    //   .unsigned()
    //   .references('id')
    //   .inTable('game')
    //   .onDelete('CASCADE');
    // t.integer('previously_played')
    //   .unsigned()
    //   .references('id')
    //   .inTable('game')
    //   .onDelete('CASCADE');
    t.string('username').notNullable();
    t.string('password').notNullable();
    t.string('email').notNullable();
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
