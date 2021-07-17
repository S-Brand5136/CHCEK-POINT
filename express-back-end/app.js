const Express = require('express');
const app = Express();
const BodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// Routes
const users_route = require('./routes/users');
const games_route = require('./routes/games');
const ratings_route = require('./routes/ratings');
const users_lists_route = require('./routes/users_lists');
const auth_route = require('./routes/auth');

// Database Config
const database = require('./db-config');

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));

// Routes config
app.use('/api/users', users_route(database));
app.use('/api/games', games_route(database));
app.use('/api/ratings', ratings_route(database));
app.use('/api/lists', users_lists_route(database));
app.use('/api/auth', auth_route(database));

module.exports = app;
