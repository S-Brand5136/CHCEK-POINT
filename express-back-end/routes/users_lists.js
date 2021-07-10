const router = require('express').Router();

module.exports = (db) => {
  // GET: User lists
  router.get('/:userId', (req, res) => {
    db('users_lists')
      .select('users_lists.list_title', 'users_lists.id')
      .count('game.id')
      .leftOuterJoin('game', 'game.list_id', '=', 'users_lists.id')
      .groupBy('users_lists.list_title', 'users_lists.id')
      .where('user_id', req.params.userId)
      .then((data) => {
        return res.status(200).json({ data });
      });
  });

  // POST: A new list to the users collection
  router.post('/:id', (req, res) => {
    res.json({ users_list: 'Works' });
  });

  // PUT: A new game into an existing users list
  router.put('/:id/:game_id', (req, res) => {
    const { num_hours_played, list_id, game_id } = req.body;
    db('game')
      .insert({ num_hours_played, list_id, game_id })
      .then((game) => {
        return res.status(200).json({ success: true, game });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ Error: 'Sorry, there was an error during update!' });
      });
  });

  router.get('/users/activity', (req, res) => {
    db('game')
      .select(
        'list_id',
        'users.username',
        'users_lists.list_title',
        'games_catalog.name',
        'num_hours_played',
        'game_id'
      )
      .join('games_catalog', 'games_catalog.id', '=', 'game_id')
      .join('users_lists', 'users_lists.id', '=', 'list_id')
      .join('users', 'users.id', '=', 'users_lists.user_id')
      .orderBy('game.created_on', 'desc')
      .then((list) => {
        if (list.length >= 0) {
          return res.status(200).json({ list });
        }
        throw Error;
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ Error: 'Error fetching activity!' });
      });
  });

  return router;
};
