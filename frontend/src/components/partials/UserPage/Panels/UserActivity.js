import React from 'react';

import PanelHeader from './PanelHeader';
import Activity from '../../HomePage/Tab_Panes/UserActivity';

const UserActivity = () => {
  return (
    <div className='user-activity-container'>
      <PanelHeader name='ACTIVITY' />
      <main className='panel-body'>
        <Activity limit={5} />
      </main>
    </div>
  );
};

export default UserActivity;
