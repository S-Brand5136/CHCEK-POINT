const gameData = require('../../bin/gameData');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tags')
    .del()
    .then(async function () {
      // Inserts seed entries
      let tagData_formatted = [];
      gameData.forEach((data, index1) => {
        let tags = data.dTag;
        tags.forEach((tag) => {
          tagData_formatted.push({
            game_id: index1 + 1,
            tag_name: tag.name,
            image_background: tag.image_background,
          });
        });
      });
      await knex('tags').insert(tagData_formatted);
    })
    .catch((e) => {
      console.log(e);
    });
};
