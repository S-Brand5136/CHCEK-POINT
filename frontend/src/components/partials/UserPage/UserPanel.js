import React from 'react';

import UserStats from './Panels/UserStats';
import UserActivity from './Panels/UserActivity';
import UserLists from './Panels/UserLists';
import UserCollections from './Panels/UserCollections';

const UserPanel = ({ lists, collections }) => {
  return (
    <div className='user-collections-container'>
      <UserCollections collections={collections} />
      <UserLists lists={lists} />
      <UserActivity />
      <UserStats />
    </div>
  );
};

export default UserPanel;
