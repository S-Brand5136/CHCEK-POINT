const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.json({ ratings: 'Works' });
  });
  router.get('/:id', (req, res) => {
    res.json({ ratings: 'Works' });
  });

  return router;
};
