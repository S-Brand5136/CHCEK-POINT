const router = require('express').Router();

module.exports = (db) => {
  // POST: a new rating
  // RETURNS: true if succesful
  router.post('/', (req, res) => {
    const {
      userRating: { user_id, game_id, rating },
    } = req.body;
    db('ratings')
      .insert({ user_id, game_id, rating })
      .then(() => {
        return res.status(200).json({ success: true });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ Error: 'Sorry, there was an error during rating post!' });
      });
  });
  // GET: a games total ratings
  // RETURN: average rating, games name
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('ratings')
      .select('games_catalog.name')
      .avg('rating')
      .where({ game_id: id })
      .leftOuterJoin(
        'games_catalog',
        'games_catalog.id',
        '=',
        'ratings.game_id'
      )
      .groupBy('games_catalog.name')
      .then((game) => {
        return res.status(200).json({ game });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ Error: 'Sorry, there was an error during rating post!' });
      });
  });

  return router;
};
