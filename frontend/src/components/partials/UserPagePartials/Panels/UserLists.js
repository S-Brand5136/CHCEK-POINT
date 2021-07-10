import React from 'react';

import PanelHeader from './PanelHeader';

import { Typography } from 'antd';

const UserLists = () => {
  return (
    <div className='user-lists-container'>
      <PanelHeader name={'LISTS'} />
      <main className='panel-body'></main>
    </div>
  );
};

export default UserLists;
