const router = require('express').Router();

module.exports = (db) => {
  // GET: All the users in the database
  router.get('/', (req, res) => {
    db('users')
      .select()
      .then((users) => {
        if (users.length > 0) {
          return res.status(200).json({ users });
        }
        throw Error;
      })
      .catch(() => {
        res.status(500).json({
          Error: "Sorry! We couldn't find what you were looking for!",
        });
      });
  });
  // GET: A specific user, and each of their lists, lists_titles
  router.get('/:id', (req, res) => {
    db('users')
      .select()
      .where({ id: req.params.id })
      .then((user) => {
        db('users_lists')
          .select('list_title')
          .where({ user_id: req.params.id })
          .groupBy('list_title')
          .then((list) => {
            return res.status(200).json({ user, list });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          Error: "Sorry! We couldn't find what you were looking for!",
        });
      });
  });
  // GET: A list of stats about the user
  router.get('/stats/:id', (req, res) => {
    res.status(200).json({ hello: 'works' });
  });

  return router;
};
