const router = require('express').Router();

module.exports = (db) => {
  // POST: a new rating
  router.post('/', (req, res) => {
    const { user_id, game_id, rating } = req.body;
    db('ratings')
      .insert({ user_id, game_id, rating })
      .then(() => {
        return res.status(200).json({ success: true });
      })
      .catch(() => {
        res
          .status(500)
          .json({ Error: 'Sorry, there was an error during rating post!' });
      });
  });
  // GET: a games total ratings
  router.get('/:id', (req, res) => {
    res.json({ ratings: 'Works' });
  });

  return router;
};
