const router = require('express').Router();

module.exports = (db) => {
  // POST: a new rating
  router.post('/', (req, res) => {
    res.json({ ratings: 'Works' });
  });
  // GET: a games total ratings
  router.get('/:id', (req, res) => {
    res.json({ ratings: 'Works' });
  });

  return router;
};
