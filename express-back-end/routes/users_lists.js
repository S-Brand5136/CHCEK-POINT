const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.json({ users_list: 'Works' });
  });
  router.get('/:id', (req, res) => {
    res.json({ users_list: 'Works' });
  });

  return router;
};
