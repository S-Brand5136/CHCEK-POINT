import React from 'react';

import PanelHeader from './PanelHeader';

import { Typography, Button } from 'antd';

const UserCollections = () => {
  return (
    <div className='collections-container'>
      <PanelHeader name={'COLLECTIONS'} />
      <main className='panel-body'></main>
    </div>
  );
};

export default UserCollections;
