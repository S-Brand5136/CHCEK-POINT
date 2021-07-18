const request = require('supertest');
const app = require('../../app');
const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

describe('Testing /games route..', () => {
  // ROUTE: /api/games/
  test('it should return all games from route "/" path', async () => {
    const response = await request(app).get('/api/games');
    expect(response.statusCode).toBe(200);
    expect(response.body.catalog.length).toBe(100);
  });

  test('it should return a limited amount of games when passed a valid query', async () => {
    const response = await request(app).get('/api/games').query({ limit: 5 });
    expect(response.statusCode).toBe(200);
    expect(response.body.catalog.length).toBe(5);
  });

  // ROUTE: /api/games/:id
  test('it should return a single game when passed a valid ID', async () => {
    const response = await request(app).get('/api/games/8');
    expect(response.statusCode).toBe(200);
    expect(response.body.game.length).toBe(1);
    expect(response.body.game[0].name);
    expect(response.body.game[0].description);
    expect(response.body.game[0].released);
    expect(response.body.game[0].esrb_rating);
  });

  test('it should return a 404 when an invalid ID is given', async () => {
    const response = await request(app).get('/api/games/101');
    expect(response.statusCode).toBe(404);
  });

  // ROUTE: /api/games/tags/:search
  test('it should return all games with matching tags', async () => {
    const response = await request(app).get('/api/games/tags/singleplayer');
    expect(response.statusCode).toBe(200);
    expect(response.body.list).not.toBe(undefined);
    expect(response.body.list.length).not.toBe(0);
    expect(response.body.list.length).toBe(81);
  });

  test('it should return a 404 when given invalid search term', async () => {
    const response = await request(app).get('/api/games/tags/zoo-1');
    expect(response.statusCode).toBe(404);
    expect(response.body.list).toBe(undefined);
    expect(response.Error);
  });

  // ROUTE: /api/games/keyword/search
  test('it should return all games with matching name with valid query', async () => {
    const response = await request(app)
      .get('/api/games/keyword/search')
      .query({ search: 'mario' });
    expect(response.statusCode).toBe(200);
    expect(response.body.list.length).toBeGreaterThan(1);
  });

  test('it should return a 404 message when given an invalid query  ', async () => {
    const response = await request(app)
      .get('/api/games/keyword/search')
      .query({ search: '-1' });
    expect(response.statusCode).toBe(404);
    expect(response.body.list).toBe(undefined);
  });

  // ROUTE: /api/games/
  test('it should return a 404 when theres an error retrieving all games', async () => {
    await db.migrate.rollback();
    const response = await request(app).get('/api/games');
    expect(response.statusCode).toBe(404);
    expect(response.body.catalog).toBe(undefined);
  });

  afterAll((done) => {
    done();
  });
});
