const router = require('express').Router();

module.exports = (db) => {
  // GET: all the games in the game catalog
  // TODO: Add the functionality for users queries to be added to the search
  router.get('/', (req, res) => {
    const { limit } = req.query;

    db('games_catalog')
      .select()
      .limit(limit || 100)
      .then((catalog) => {
        if (catalog.length > 0) {
          return res.status(200).json({ catalog });
        }
        throw Error;
      })
      .catch(() => {
        return res.status(404).json({
          Error: "Sorry! We couldn't find what you were looking for!",
        });
      });
  });

  // GET: A specific game from the catalog with its rating and tags
  // RETURNS: A game object with all its info, rating and tags
  router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('games_catalog')
      .select('games_catalog.*')
      .avg('rating')
      .where('games_catalog.id', id)
      .leftOuterJoin('ratings', 'games_catalog.id', '=', 'ratings.game_id')
      .groupBy('games_catalog.id')
      .then((game) => {
        if (game.length <= 0) {
          throw Error;
        }
        db('tags')
          .select('tag_name')
          .where('tags.game_id', id)
          .groupBy('tag_name')
          .then((tag_list) => {
            return res.status(200).json({ game, tag_list });
          });
      })
      .catch(() => {
        return res.status(404).json({
          Error: "Sorry! We couldn't find what you were looking for!",
        });
      });
  });

  // GET: games by tag name
  // RETURNS: An array of game objects
  router.get('/tags/:search', (req, res) => {
    const { search } = req.params;

    db('tags')
      .select('tag_name', 'games_catalog.*')
      .where('tag_name', 'ilike', `%${search}%`)
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
        res.status(404).json({ Error: 'No games found with that tag!' });
      });
  });

  router.get('/keyword/search', (req, res) => {
    const { search } = req.query;

    db('games_catalog')
      .select('games_catalog.*')
      .where('name', 'ilike', `%${search}%`)
      .orderBy('games_catalog.id')
      .then((list) => {
        if (list.length > 0) {
          return res.status(200).json({ list });
        }
        throw Error;
      })
      .catch((err) => {
        res.status(404).json({ Error: 'No games found with that keyword!' });
      });
  });

  return router;
};
