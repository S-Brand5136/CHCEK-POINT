import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Notification from '../components/partials/Notification';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [userCollection, setUsersCollection] = useState(null);
  const [userLists, setUsersLists] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(localStorage.getItem('user')));
      setUsersCollection(JSON.parse(localStorage.getItem('collection')));
      setUsersLists(JSON.parse(localStorage.getItem('lists')));
    }
  }, []);

  // Perform login process for the user & save authID, etc
  const login = async function (email, password) {
    await axios
      .get('/api/auth/', { params: { email, password } })
      .then((res) => {
        const {
          id,
          username,
          email,
          platforms,
          bio,
          in_game_usernames,
          pronoun,
          birthdate,
          timezone,
          discord_username,
          created_at,
        } = res.data.user[0];
        setUser({
          id,
          username,
          email,
          platforms,
          bio,
          in_game_usernames,
          pronoun,
          birthdate,
          timezone,
          discord_username,
          created_at,
        });
        localStorage.setItem(
          'user',
          JSON.stringify({
            id,
            username,
            email,
            platforms,
            bio,
            in_game_usernames,
            pronoun,
            birthdate,
            timezone,
            discord_username,
            created_at,
          })
        );
        setAuth(true);
        getUserDetails(id);
      });
  };

  const getUserDetails = async function (id) {
    await axios.get(`/api/users/${id}`).then((res) => {
      setUsersCollection(res.data.collection);
      console.log('yes hello', res);
      setUsersLists(res.data.lists);

      localStorage.setItem('collection', JSON.stringify(res.data.collection));
      localStorage.setItem('lists', JSON.stringify(res.data.lists));
    });
  };

  const logout = function (email, password) {
    setUser(null);
    setUsersCollection(null);
    setUsersLists(null);
    localStorage.setItem('user', '');
    localStorage.setItem('collection', '');
    localStorage.setItem('lists', '');
    setAuth(false);
    Notification({
      type: 'success',
      description: 'Succesfully Logged out!',
      title: 'Success',
    });
  };

  // authContext will expose these items
  const userData = {
    auth,
    user,
    userLists,
    userCollection,
    getUserDetails,
    login,
    logout,
  };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
}

export const authContext = createContext();
