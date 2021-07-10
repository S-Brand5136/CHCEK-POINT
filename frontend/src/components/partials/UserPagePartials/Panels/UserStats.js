import React from 'react';

import PanelHeader from './PanelHeader';

import { Typography } from 'antd';

const UserStats = () => {
  return (
    <div className='user-lists-stats'>
      <PanelHeader name='STATS' />
      <main className='panel-body'></main>
    </div>
  );
};

export default UserStats;
