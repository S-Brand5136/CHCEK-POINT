const router = require('express').Router();

module.exports = (db) => {
  // GET: All the users in the database
  router.get('/', (req, res) => {
    db('users')
      .select()
      .then((users) => {
        if (!users.length <= 0) {
          return res.status(200).json({ users });
        }
        throw Error;
      })
      .catch(() => {
        res.status(404).json({
          error: 'Sorry, there was a problem retrieving users!',
        });
      });
  });

  // longest in backlog, latest completed, mostPlayedChart

  // GET: A list of stats about the user
  router.get('/:id/stats', (req, res) => {
    const { id } = req.params;
    Promise.all([
      db('users_lists')
        .select('game.num_hours_played', 'games_catalog.name')
        .join('game', 'game.list_id', '=', 'users_lists.id')
        .join('games_catalog', 'games_catalog.id', '=', 'game.game_id')
        .where('users_lists.user_id', id)
        .andWhere('users_lists.list_title', 'Completed')
        .orderBy('game.created_on')
        .limit(4),
      db('users_lists')
        .select('games_catalog.name', 'game.created_on')
        .join('game', 'game.list_id', '=', 'users_lists.id')
        .join('games_catalog', 'games_catalog.id', '=', 'game.game_id')
        .where('users_lists.user_id', id)
        .orderBy('game.created_on', 'desc')
        .limit(4),
      db('users_lists')
        .select('game.num_hours_played', 'games_catalog.name')
        .join('game', 'game.list_id', '=', 'users_lists.id')
        .join('games_catalog', 'games_catalog.id', '=', 'game.game_id')
        .where('users_lists.user_id', id)
        .andWhere('users_lists.list_title', 'Completed')
        .orderBy('game.created_on')
        .limit(4),
    ])
      .then((values) => {
        if (!values.length <= 0) {
          return res.status(200).json({
            userStats: [
              { longestPlayed: values[0] },
              { longestInBacklog: values[1] },
              { speedRuns: [2] },
            ],
          });
        }
        throw Error;
      })
      .catch((err) => {
        res
          .status(404)
          .json({ error: 'Sorry, the user stats could not found!' });
      });
  });

  // PUT: Update a users information
  router.put('/profile', (req, res) => {
    const { user } = req.body;
    db('users')
      .where('id', user.id)
      .update(
        {
          username: user.username,
          email: user.email,
          platforms: user.platforms,
          bio: user.bio,
          in_game_usernames: user.in_game_usernames,
          pronoun: user.pronoun,
          birthdate: user.birthdate,
          timezone: user.timezone,
          discord_username: user.discord_username,
        },
        [
          'username',
          'email',
          'platforms',
          'bio',
          'in_game_usernames',
          'pronoun',
          'birthdate',
          'timezone',
          'discord_username',
        ]
      )
      .then((user) => {
        res.status(200).json({ user: user[0] });
      })
      .catch((err) => {
        res.status(400).json({
          error:
            'Sorry, there was a problem updating your information! Try again.',
        });
      });
  });

  return router;
};
