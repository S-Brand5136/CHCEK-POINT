const router = require('express').Router();

module.exports = (db) => {
  // POST: a new user
  router.post('/', (req, res) => {
    res.json({ ratings: 'Works' });
  });
  // GET: a users details for login
  router.get('/', (req, res) => {
    const { email, password } = req.body;
    db('users')
      .select()
      .where({ email: email, password: password })
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
