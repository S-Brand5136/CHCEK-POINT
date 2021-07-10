import React from 'react';

import PanelHeader from './PanelHeader';

import { Typography } from 'antd';

const UserActivity = () => {
  return (
    <div className='user-lists-activity'>
      <PanelHeader name='ACTIVITY' />
      <main className='panel-body'></main>
    </div>
  );
};

export default UserActivity;
