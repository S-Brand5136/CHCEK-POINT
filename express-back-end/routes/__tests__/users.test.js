const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

test('select all users', async () => {
  let total_users = await db('users').select('username');
  expect(total_users.length).toEqual(3);
});
