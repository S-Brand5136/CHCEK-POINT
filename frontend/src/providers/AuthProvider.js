import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Notification from '../components/partials/Notification';
import filterLists from '../helpers/filter_lists';
import filterCollections from '../helpers/filter_collections';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [userCollection, setUsersCollection] = useState(null);
  const [userLists, setUsersLists] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      getUserDetails(storedUser.id);
    }
  }, []);

  // Perform login process for the user & save authID, etc
  const login = async function (email, password) {
    await axios.post('/api/auth/login', { email, password }).then((res) => {
      const {
        id,
        username,
        email,
        platforms,
        avatar,
        bio,
        in_game_usernames,
        pronoun,
        birthdate,
        timezone,
        discord_username,
        created_at,
      } = res.data.user;
      setUser({
        id,
        username,
        email,
        platforms,
        avatar,
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
          avatar,
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
    await axios.get(`/api/lists/${id}`).then((res) => {
      setUsersCollection(filterCollections(res.data));
      setUsersLists(filterLists(res.data));
    });
  };

  const logout = function () {
    setUser(null);
    setUsersCollection(null);
    setUsersLists(null);
    localStorage.setItem('user', '');
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
