const request = require('supertest');
const app = require('../../app');
const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

describe('Test the /ratings path', () => {
  test('it should return a game ratings when given a valid ID', async () => {
    const response = await request(app).get('/api/ratings/5');
    expect(response.statusCode).toBe(200);
  });

  test('it should add a new rating to a game when sent valid data', async () => {
    const response = await request(app)
      .post('/api/ratings')
      .send({ userRating: { user_id: 3, game_id: 1, rating: 50 } })
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.game).not.toBe(null);
  });

  afterAll((done) => {
    done();
  });
});
