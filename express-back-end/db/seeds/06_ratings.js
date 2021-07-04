exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ratings')
    .del()
    .then(function () {
      return knex('ratings').insert([
        { user_id: 1, game_id: 5, rating: 25 },
        { user_id: 2, game_id: 3, rating: 100 },
        { user_id: 3, game_id: 84, rating: 64 },
      ]);
    });
};
