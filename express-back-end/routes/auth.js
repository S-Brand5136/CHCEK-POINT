const router = require('express').Router();

module.exports = (db) => {
  // POST: a new user
  router.post('/', (req, res) => {
    const { username, password, email } = req.body;
    db('users')
      .insert({ email, username, password })
      .then((user) => {
        return res.status(200).json({ success: true, user });
      })
      .catch(() => {
        res
          .status(500)
          .json({ Error: 'Sorry, there was an error during registration' });
      });
  });

  // GET: a users details for login
  // RETURNS: A user object
  router.get('/', async (req, res) => {
    const { email, password } = req.query;
    db('users')
      .select()
      .where({ email, password })
      .then((user) => {
        if (user.length > 0) {
          return res.json({ user });
        }
        throw Error;
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({ Error: 'Invalid Credentials' });
      });
  });
  return router;
};
