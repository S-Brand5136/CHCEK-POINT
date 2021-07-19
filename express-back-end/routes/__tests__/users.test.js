const request = require('supertest');
const app = require('../../app');
const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

describe('Testing route /users../', () => {
  // ROUTE: PUT: api/users/profile
  test('When sent valid data update a users information', async () => {
    const response = await request(app)
      .put('/api/users/profile')
      .send({ user_id: 3, username: 'BJ.Shemilt' });
    expect(response.statusCode).toBe(200);
    expect(response.body.user).not.toBe(undefined);
    expect(response.body.user.username).toBe('BJ.Shemilt');
  });

  test('When sent invalid update data, return a 400 error with response ', async () => {
    const response = await request(app)
      .put('/api/users/profile')
      .send({ user_id: null, discord_username: 'johnDoe' });
    expect(response.statusCode).toBe(400);
    expect(response.body.user).toBe(undefined);
    expect(response.error).toBe(
      'Sorry, there was a problem updating your information! Try again.'
    );
  });

  // ROUTE: api/users/:id/stats
  test('Return user stats on get request', async () => {
    const response = await request(app).get('/api/users/3/stats');
    expect(response.statusCode).toBe(200);
    expect(response.userStats.length).toBe(3);
  });

  test('Should return a 404 when an invalid userId is sent', async () => {
    const response = await request(app).get('/api/users/-1/stats');
    expect(response.statusCode).toBe(404);
    expect(response.error).toBe('Sorry, that users stats could not be found!');
  });

  // ROUTE: /api/users/
  test('Should return all users in database', async () => {
    const response = await request(app).get('/api/users');
    expect(repsonse.statusCode).toBe(200);
    expect(response.users.length).toBe(3);
  });

  test('Should return a 404 when an error occurs retrieving all users', async () => {
    db.migrate.rollback();
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(404);
    expect(response.error).toBe('Sorry, there was a problem retrieving users!');
  });

  afterAll((done) => {
    done();
  });
});
