const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

test('Log in to account', async () => {
  let games = null;
  expect(games).toEqual(null);
});
