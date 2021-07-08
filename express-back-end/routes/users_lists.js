const router = require('express').Router();

module.exports = (db) => {
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
          .json({ Error: 'Sorry, there was an error during update' });
      });
  });

  return router;
};
