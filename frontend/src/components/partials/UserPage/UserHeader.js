import React from 'react';

import { Typography } from 'antd';

const UserHeader = ({ user }) => {
  return (
    <header className='user-header'>
      <div className='user-header-title'>
        <Typography.Title level={1}>{user && user.username}</Typography.Title>
      </div>
      <img
        style={{ borderRadius: '20px', height: '200px', width: 'auto' }}
        className='game-card-image'
        alt='User Avatar'
        src={user && user.avatar}
      />
    </header>
  );
};

export default UserHeader;
