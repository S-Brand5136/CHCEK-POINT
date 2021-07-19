const router = require('express').Router();

// TODO: Add delete route

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

  // GET: User lists
  router.get('/:userId', (req, res) => {
    db('game')
      .select(
        'users_lists.id as listID',
        'list_title',
        'games_catalog.name',
        'game.num_hours_played',
        'category',
        'background_image',
        'game.list_id',
        'games_catalog.id as gameID',
        'game.id as game_id'
      )
      .rightOuterJoin('games_catalog', 'game_id', '=', 'games_catalog.id')
      .rightOuterJoin('users_lists', 'users_lists.id', '=', 'game.list_id')
      .where('users_lists.user_id', req.params.userId)
      .orderBy('list_id')
      .then((list) => {
        return res.status(200).json({ list });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // DELETE: A game from a users list
  router.delete('/delete/:id', (req, res) => {
    db('game')
      .where('game.id', req.params.id)
      .del()
      .then((data) => {
        return res
          .status(200)
          .json({ msg: 'Sucessfully removed game from list', data });
      });
  });

  // POST: A new list to the users collection
  router.post('/create', (req, res) => {
    const { user_id, list_title, category } = req.body;
    db('users_lists')
      .insert({ user_id, list_title, category })
      .then((users_lists) => {
        return res.status(200).json({ success: true, users_lists });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          Error: 'Sorry, there was an error while creating the list!',
        });
      });
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
        'users.avatar',
        'users_lists.list_title',
        'games_catalog.name',
        'num_hours_played',
        'game_id',
        'background_image'
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
