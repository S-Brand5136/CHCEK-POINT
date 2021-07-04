const Express = require('express');
const app = Express();
const BodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const knexfile = require('./knexfile')['development'];
const knex = require('knex');
const PORT = process.env.PORT || 5000;

// Routes
const users_route = require('./routes/users');
const games_route = require('./routes/games');
const ratings_route = require('./routes/ratings');
const users_lists_route = require('./routes/users_lists');
const login_route = require('./routes/login');
const register_route = require('./routes/register');

// Configuration
const database = knex(knexfile);

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));

// Routes config
app.use('/api/users', users_route(database));
app.use('/api/games', games_route(database));
app.use('/api/ratings', ratings_route(database));
app.use('/api/lists', users_lists_route(database));
app.use('/api/login', login_route(database));
app.use('/api/register', register_route(database));

app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
