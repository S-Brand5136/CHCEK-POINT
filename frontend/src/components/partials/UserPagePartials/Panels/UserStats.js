import React from 'react';

import PanelHeader from './PanelHeader';

import StackedChart from '../charts/StackedChart';

const UserStats = () => {
  return (
    <div className='user-lists-stats'>
      <PanelHeader name='STATS' />
      <main className='panel-body'>
        <StackedChart />
      </main>
    </div>
  );
};

export default UserStats;
