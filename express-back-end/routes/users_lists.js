const router = require('express').Router();

module.exports = (db) => {
  // POST: A new list to the users collection
  router.post('/:id', (req, res) => {
    res.json({ users_list: 'Works' });
  });
  // PUT: A new game into an existing users list
  router.put('/:id/:game_id', (req, res) => {
    res.json({ users_list: 'Works' });
  });

  return router;
};
