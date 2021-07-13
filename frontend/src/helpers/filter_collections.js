export default function filterCollections(listobj) {
  let list = listobj.list;
  const collection = {};

  for (const item of list) {
    if (item.category === 'Stats' && !collection[item.list_title]) {
      collection[item.list_title] = [];
      const category = item.category;
      const id = item.listID;
      collection[item.list_title].push(category);
      collection[item.list_title].push(id);
    }

    if (item.category === 'Stats' && collection[item.list_title]) {
      collection[item.list_title].push({
        name: item.name,
        hours_played: item.num_hours_played,
        background_image: item.background_image,
        id: item.gameID,
        game_id: item.game_id,
      });
    }
  }

  return collection;
}
