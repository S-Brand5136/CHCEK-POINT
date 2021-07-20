exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('game')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        { list_id: 5, game_id: 76, num_hours_played: 10 },
        { list_id: 2, game_id: 22, num_hours_played: 78 },
        { list_id: 9, game_id: 3, num_hours_played: 315 },
        { list_id: 5, game_id: 66, num_hours_played: 25 },
        { list_id: 3, game_id: 87, num_hours_played: 99 },
        { list_id: 10, game_id: 23, num_hours_played: 150 },
        { list_id: 10, game_id: 75, num_hours_played: 20 },
        { list_id: 10, game_id: 43, num_hours_played: 145 },
        { list_id: 11, game_id: 74, num_hours_played: 67 },
        { list_id: 11, game_id: 34, num_hours_played: 7 },
        { list_id: 11, game_id: 44, num_hours_played: 47 },
        { list_id: 11, game_id: 54, num_hours_played: 37 },
        { list_id: 12, game_id: 50, num_hours_played: 0 },
        { list_id: 13, game_id: 21, num_hours_played: 0 },
        { list_id: 13, game_id: 71, num_hours_played: 0 },
        { list_id: 14, game_id: 55, num_hours_played: 0 },
        { list_id: 14, game_id: 36, num_hours_played: 0 },
      ]);
    });
};
