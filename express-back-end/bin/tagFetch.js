const gameData = require('./gameData');
const fs = require('fs');
let tags = [];
let savefile = 'tag.js';

gameData.forEach((data, index1) => {
  data.dTag.forEach((gameTag) => {
    if (
      tags.some((tag) => {
        tag.name === gameTag.name;
      })
    ) {
      //do nothing
    } else {
      tags.push({
        game_id: index + 1,
        name: gameTag.name,
        image_background: gameTag.image_background,
      });
    }
  });
});

fs.writeFile(`./${savefile}`, JSON.stringify(tags, null, 2), () => {
  console.log(
    `Downloaded and saved ${fs.statSync(savefile).size} bytes to ${savefile}`
  );
});
