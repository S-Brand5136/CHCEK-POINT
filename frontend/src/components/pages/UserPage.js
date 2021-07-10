import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../providers/AuthProvider';

import { useHistory, useParams } from 'react-router-dom';
import UserHeader from '../partials/UserPagePartials/UserHeader';
import UserAbout from '../partials/UserPagePartials/UserAbout';
import UserInfo from '../partials/UserPagePartials/UserInfo';
import UserPanel from '../partials/UserPagePartials/UserPanel';

const UserPage = () => {
  const { user, userLists, userCollection, getUserDetails } =
    useContext(authContext);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {}, []);

  return (
    <main className='userpage-container'>
      <UserHeader user={user} />
      <div className='userinfo-container'>
        <UserInfo user={user} />
        <UserAbout user={user} />
      </div>
      <UserPanel lists={userLists} collections={userCollection} />
    </main>
  );
};

export default UserPage;
