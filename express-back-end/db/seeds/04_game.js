exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('game')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        { list_id: 1, game_id: 3, num_hours_played: 315 },
        { list_id: 3, game_id: 23, num_hours_played: 150 },
        { list_id: 4, game_id: 74, num_hours_played: 0 },
        { list_id: 1, game_id: 50, num_hours_played: 0 },
      ]);
    });
};
