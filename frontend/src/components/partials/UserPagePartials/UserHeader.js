import React from 'react';

import { Typography } from 'antd';

import avatar from '../../../img/avatars/villain.png';

const UserHeader = ({ user }) => {
  console.log(user);

  return (
    <header className='user-header'>
      <div className='user-header-title'>
        <Typography.Title level={1}>{user && user.username}</Typography.Title>
      </div>
      <img
        style={{ borderRadius: '20px', height: '200px', width: 'auto' }}
        className='game-card-image'
        alt={'User Avatar'}
        src={avatar}
      />
    </header>
  );
};

export default UserHeader;
