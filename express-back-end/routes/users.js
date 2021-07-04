const router = require('express').Router();

module.exports = (db) => {
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
            user['user_lists_titles'] = list;
            return res.status(200).json({ user });
          });
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
