const router = require('express').Router();

module.exports = (db) => {
  // GET: all the games in the game catalog

  // TODO: Add the functionality for users queries to be added to the search

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
  // GET: A specific game from the catalog with its rating and tags
  // RETURNS: A game object with all its info, rating and tags
  router.get('/:id', (req, res) => {
    db('games_catalog')
      .select('games_catalog.*', 'ratings.rating')
      .sum('ratings.rating')
      .where({ 'games_catalog.id': req.params.id })
      .leftOuterJoin('ratings', 'games_catalog.id', '=', 'ratings.game_id')
      .groupBy('games_catalog.id', 'ratings.rating')
      .then((game) => {
        db('tags')
          .select('tag_name')
          .where({ game_id: req.params.id })
          .groupBy('tag_name')
          .then((tag_list) => {
            if (game.length > 0) {
              return res.status(200).json({ game, tag_list });
            }
            throw Error;
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          Error: "Sorry! We couldn't find what you were looking for!",
        });
      });
  });
  // GET: games by tag name
  // RETURNS: An array of game objects
  router.get('/tags/search', (req, res) => {
    db('tags')
      .select('tag_name', 'games_catalog.*')
      .where('tag_name', 'ilike', `%${req.body.tag_name}%`)
      .leftOuterJoin('games_catalog', 'games_catalog.id', '=', 'tags.game_id')
      .groupBy('tag_name', 'games_catalog.id')
      .orderBy('games_catalog.id')
      .then((list) => {
        if (list.length > 0) {
          return res.status(200).json({ list });
        }
        throw Error;
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ Error: 'No games found with that tag!' });
      });
  });

  return router;
};
