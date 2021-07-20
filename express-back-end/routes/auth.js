const router = require('express').Router();

module.exports = (db) => {
  // POST: a new user
  router.post('/register', (req, res) => {
    const { username, password, email, avatar } = req.body;
    db('users')
      .insert({ username, password, email, avatar }, [
        'username',
        'email',
        'avatar',
      ])
      .then((data) => {
        return res.status(200).json({ success: true, user: data[0] });
      })
      .catch((err) => {
        res
          .status(401)
          .json({ error: 'There was an error during registration! Try again' });
      });
  });

  // GET: a users details for login
  // RETURNS: A user object
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    db('users')
      .select()
      .where({ email, password })
      .then((user) => {
        if (!user.length <= 0) {
          return res.json({ user: user[0] });
        }
        throw Error;
      })
      .catch((err) => {
        res.status(401).json({ error: 'Invalid Credentials' });
      });
  });
  return router;
};
