const router = require('express').Router();

module.exports = (db) => {
  // POST: a new user
  router.post('/', (req, res) => {
    res.json({ ratings: 'Works' });
  });
  // GET: a users details for login
  router.get('/:id', (req, res) => {
    res.json({ ratings: 'Works' });
  });
  return router;
};
