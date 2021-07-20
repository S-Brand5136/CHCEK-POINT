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
      .send({
        user: {
          id: 3,
          username: 'JohnDoe',
          email: 'John.Doe@example.com',
          platforms: 'PS4, PC',
          bio: 'John doe',
          in_game_usernames: 'JohnDozer',
          pronoun: 'he/him',
          birthdate: '1999-03-20',
          timezone: 'UTC-9',
          discord_username: 'John Dozer',
        },
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.user).not.toBe(undefined);
    expect(response.body.user.username).toBe('JohnDoe');
    expect(response.body.user.email).toBe('John.Doe@example.com');
    expect(response.body.user.bio).toBe('John doe');
    expect(response.body.user.in_game_usernames).toBe('JohnDozer');
    expect(response.body.user.birthdate).toBe('1999-03-20T00:00:00.000Z');
  });

  test('When sent invalid update data, return a 400 error with response ', async () => {
    const response = await request(app)
      .put('/api/users/profile')
      .send({ user: { user_id: null, discord_username: 'johnDoe' } });
    expect(response.statusCode).toBe(400);
    expect(response.body.user).toBe(undefined);
    expect(response.body.error).toBe(
      'Sorry, there was a problem updating your information! Try again.'
    );
  });

  // ROUTE: api/users/:id/stats
  test('Return user stats on get request', async () => {
    const response = await request(app).get('/api/users/3/stats');
    expect(response.statusCode).toBe(200);
    expect(response.body.userStats.length).toBe(3);
  });

  // ROUTE: /api/users/
  test('Should return all users in database', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.users.length).toBe(3);
  });

  test('Should return a 404 when an error occurs retrieving all users', async () => {
    await db.migrate.rollback();
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe(
      'Sorry, there was a problem retrieving users!'
    );
  });

  afterAll((done) => {
    done();
  });
});
