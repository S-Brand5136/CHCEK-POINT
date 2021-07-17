const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

test('select games', async () => {
  let games = await db('games_catalog').select('name');
  expect(games.length).toEqual(100);
});
