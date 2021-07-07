import { createContext, useState } from 'react';
import axios from 'axios';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [userCollection, setUsersCollection] = useState(null);
  const [userLists, setUsersLists] = useState(null);

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
        setAuth(true);
      });
  };

  const getUserDetails = async function (id) {
    await axios.get(`/api/users/${user.id}`).then((res) => {
      setUsersCollection(res.data.collection);
      setUsersLists(res.data.lists);
    });
  };

  const logout = function (email, password) {
    setUser({});
    setAuth(false);
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
