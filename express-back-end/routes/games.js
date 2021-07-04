const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db('games_catalog')
      .select()
      .then((catalog) => {
        if (catalog.length > 0) {
          return res.status(200).json({ catalog });
        }
        throw Error;
      })
      .catch(() => {
        res.status(500).json({
          Error: "Sorry! We couldn't find what you were looking for!",
        });
      });
  });
  router.get('/:id', (req, res) => {
    db('games_catalog')
      .select('games_catalog.*', 'ratings.rating')
      .where({ 'games_catalog.id': req.params.id })
      .leftOuterJoin('ratings', 'games_catalog.id', '=', 'ratings.game_id')
      .then((game) => {
        if (game.length > 0) {
          return res.status(200).json({ game });
        }
        throw Error;
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          Error: "Sorry! We couldn't find what you were looking for!",
        });
      });
  });

  return router;
};
