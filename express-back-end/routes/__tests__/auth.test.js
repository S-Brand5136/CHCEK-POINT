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
    const response = await request(app).post('/api/auth/register').send({
      username: 'example_user',
      email: 'example@example.com',
      password: '12345',
      avatar: 'https://image.flaticon.com/icons/png/512/3506/3506917.png',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.user.username).toBe('example_user');
    expect(response.body.user.email).toBe('example@example.com');
    expect(response.body.user.avatar).toBe(
      'https://image.flaticon.com/icons/png/512/3506/3506917.png'
    );
    expect(response.body.success).toBe(true);
  });

  test('When invalid data is given, return 401 code with error message', async () => {
    const response = await request(app).post('/api/auth/register').send({
      username: null,
      email: undefined,
      password: '12345',
    });
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe(
      'There was an error during registration! Try again'
    );
  });

  // Route /api/auth/login
  test('When given valid user credentials, login', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: 'Brandon.Shemilt@example.com',
      password: '12345',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.user.email).toBe('Brandon.Shemilt@example.com');
    expect(response.body.user.username).toBe('Brandon');
  });

  test('When given invalid user credentials, return 401 with error message', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: null,
      password: undefined,
    });
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe('Invalid Credentials');
  });

  afterAll((done) => {
    done();
  });
});
