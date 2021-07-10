import React from 'react';

import UserStats from './Panels/UserStats';
import UserActivity from './Panels/UserActivity';
import UserLists from './Panels/UserLists';
import UserCollections from './Panels/UserCollections';

const UserPanel = () => {
  return (
    <div className='user-collections-container'>
      <UserCollections />
      <UserLists />
      <UserActivity />
      <UserStats />
    </div>
  );
};

export default UserPanel;
