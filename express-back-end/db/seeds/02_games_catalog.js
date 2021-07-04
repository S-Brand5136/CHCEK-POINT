const gameData = require('../../bin/gameData');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('games_catalog')
    .del()
    .then(async function () {
      // Inserts seed entries
      const gameData_formatted = gameData.map((data) => {
        return {
          name: data.name,
          description: data.description,
          background_image: data.background_image
            ? data.background_image
            : 'null',
          playtime: data.playtime,
          metacritic_score: data.metacritic_score || 0,
          released: data.released,
          esrb_rating: data.esrb_rating ? data.esrb_rating.name : 'null',
        };
      });
      await knex('games_catalog').insert(gameData_formatted);
    })
    .catch((e) => {
      console.log(e);
    });
};
