export default function getNames(list, collection) {
  const result = [];
  let count = 1;
  for (const item in list) {
    result.push({
      title: item,
      id: list[item][1],
    });
  }
  console.log(collection);
  for (const item in collection) {
    result.push({
      title: item,
      id: count,
    });
    count++;
  }

  return result;
}
