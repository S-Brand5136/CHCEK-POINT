import { useContext, useEffect } from 'react';
import { authContext } from '../../providers/AuthProvider';

import UserHeader from '../partials/UserPage/UserHeader';
import UserAbout from '../partials/UserPage/UserAbout';
import UserInfo from '../partials/UserPage/UserInfo';
import UserPanel from '../partials/UserPage/UserPanel';

const UserPage = () => {
  const { user, userLists, userCollection } = useContext(authContext);

  useEffect(() => {}, []);

  return (
    <main className='userpage-container'>
      <UserHeader user={user} />
      <div className='userinfo-container'>
        <UserInfo user={user} />
        <UserAbout user={user} />
      </div>
      <UserPanel user={user} lists={userLists} collections={userCollection} />
    </main>
  );
};

export default UserPage;
