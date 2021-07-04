const router = require('express').Router();

module.exports = (db) => {
  // POST: a new user
  router.post('/', (req, res) => {
    const { username, password, email } = req.body;
    db('users')
      .insert({ email, username, password })
      .then(() => {
        return res.status(200).json({ success: true });
      })
      .catch(() => {
        res
          .status(500)
          .json({ Error: 'Sorry, there was an error during registration' });
      });
  });
  // GET: a users details for login
  // RETURNS: A user object
  router.get('/', (req, res) => {
    const { email, password } = req.body;
    db('users')
      .select()
      .where({ email, password })
      .then((user) => {
        if (user.length > 0) {
          return res.status(200).json({ user });
        }
        throw Error;
      })
      .catch(() => {
        res.status(401).json({ Error: 'Invalid Credentials' });
      });
  });
  return router;
};
