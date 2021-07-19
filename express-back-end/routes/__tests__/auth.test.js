const request = require('supertest');
const app = require('../../app');
const db = require('../../db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

describe('Testing /auth route...', () => {
  // Route /api/auth/register
  test('When given valid data, create a new user', async () => {
    const response = await request(app).post('api/auth/register').send({
      username: 'example_user',
      email: 'example@example.com',
      password: '12345',
    });
    expect(response.statusCode).toBe(200);
    expect(response.user.username).toBe('example_user');
    expect(response.user.email).toBe('example@example.com');
    expect(response.user.password).toBe('12345');
    expect(response.success).toBe(true);
  });

  test('When invalid data is given, return 400 code with error message', async () => {
    const response = await request(app).post('api/auth/register').send({
      username: null,
      email: undefined,
      password: '12345',
    });
    expect(response.statusCode).toBe(401);
    expect(response.error).toBe(
      'There was an error during registration! Try again'
    );
  });

  // Route /api/auth/login
  test('When given valid user credentials, login', async () => {
    const response = await request(app).post('/api/auth/loign').send({
      email: 'Brandon.Shemilt@example.com',
      password: '12345',
    });
    expect(response.statusCode).toBe(200);
    expect(response.user.email).toBe('Brandon.Shemilt@example.com');
    expect(response.user.userName).toBe('Brandon');
  });

  test('When given invalid user credentials, return 401 with error message', async () => {
    const response = await request(app).post('/api/auth/loign').send({
      email: null,
      password: undefined,
    });
    expect(response.statusCode).toBe(401);
    expect(response.error).toBe('Invalid Credentials');
  });

  afterAll((done) => {
    done();
  });
});
