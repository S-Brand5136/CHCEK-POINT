const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

test('select users lists', async () => {
  let total_lists = await db('users_lists').select();
  expect(total_lists.length).toEqual(14);
});
