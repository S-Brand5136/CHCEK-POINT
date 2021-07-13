export default function filterLists(listobj) {
  let list = listobj.list;
  const lists = {};

  for (const item of list) {
    if (item.category !== 'Stats' && !lists[item.list_title]) {
      lists[item.list_title] = [];
      const category = item.category;
      const id = item.listID;
      lists[item.list_title].push(category);
      lists[item.list_title].push(id);
    }

    if (item.category !== 'Stats' && lists[item.list_title]) {
      lists[item.list_title].push({
        name: item.name,
        hours_played: item.num_hours_played,
        background_image: item.background_image,
        id: item.gameID,
        game_id: item.game_id,
      });
    }
  }

  return lists;
}
