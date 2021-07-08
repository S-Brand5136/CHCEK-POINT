export default function getNames(list, collection) {
  const result = [];

  for (const item in list) {
    result.push({
      title: item,
      id: list[item][1],
    });
  }

  for (const item in collection) {
    result.push({
      title: item,
      id: collection[item][1],
    });
  }

  return result;
}
