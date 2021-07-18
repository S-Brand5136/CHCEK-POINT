const request = require('supertest');
const app = require('../../app');
const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

describe('Testsing /lists route..', () => {
  // Route: /api/lists/:userId
  test('it should return a users lists when passed valid user_id', async () => {
    const response = request(app).get('api/lists/3');
    expect(response.statusCode).toBe(200);
    expect(response.body.list.length).toBeGreatherThanOrEqual(4);
  });

  test('it should return a 404 when passed an invalid user_id', async () => {
    const response = request(app).get('api/lists/5');
    expect(response.statusCode).toBe(404);
  });

  // Route: /api/lists/delete/:id
  test('it should delete a game from a users list when passed a valid id', async () => {
    const response = request(app).delete('api/lists/delete/3');
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe('Sucessfully removed game from list');
    expect(response.body.game);
  });

  test('it should return a 400 when when passed an invalid id', async () => {
    const response = request(app).delete('api/lists/delete/101');
    expect(response.statusCode).toBe(400);
  });

  // Route: /api/lists/create
  test('it should create a new list when given a valid user_id', async () => {
    const response = request(app)
      .post('/api/lists/create')
      .send({ user_id: 3, list_title: 'Wishlist', category: 'user_made' });
    expect(response.statusCode).toBe(200);
    expect(response.success).toBe(true);
    expect(response.users_lists).not.toBe(undefined);
  });

  test('it should return a 400 when given a valid user_id but bad form data', async () => {
    const response = request(app)
      .post('/api/lists/create')
      .send({ user_id: -1, list_title: 'Wishlist', category: 'user_made' });
    expect(response.statusCode).toBe(400);
    expect(response.Error).toBe(
      'Sorry, there was an error while creating the list!'
    );
  });

  test('it should return a 400 when missing any form data', async () => {
    const response = request(app)
      .post('/api/lists/create')
      .send({ user_id: undefined, list_title: null, category: null });
    expect(response.statusCode).toBe(400);
    expect(response.Error).toBe(
      'Sorry, there was an error while createing the list!'
    );
  });

  // Route: /api/lists/:id/:game_id
  test('it should add a new game to an existing list when given a valid list id and game id', async () => {
    const response = request(app).put('/api/lists/2/15').send({
      num_hours_played: 50,
      list_id: 2,
      game_id: 15,
    });
    expect(response.statusCode).toBe(200);
    expect(response.success).toBe(true);
    expect(response.game).not.toBe(undefined);
  });

  test('it should return a 400 when given invalid data', async () => {
    const response = request(app).put('/api/lists/4/-1').send({
      num_hours_played: null,
      list_id: null,
      game_id: null,
    });
    expect(response.statusCode).toBe(400);
    expect(response.Error).toBe(
      'Sorry, there was an error adding your game to the list!'
    );
  });

  // Route: /api/lists/users/activity
  test('it should return a list of recent user activity', async () => {
    const response = request(app).get('/api/lists/users/activity');
    expect(response.statusCode).toBe(200);
    expect(response.list).toBeGreatherThanOrEqual(5);
  });

  test('it should return a 404 when theres a problem fetching data', async () => {
    db.migrate.rollback();
    const response = request(app).get('/api/lists/users/activity');
    expect(response.statusCode).toBe(404);
    expect(response.list).toBe(undefined);
  });
});

afterAll((done) => {
  done();
});
