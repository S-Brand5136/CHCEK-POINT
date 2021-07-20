import React from 'react';

import { Button } from 'antd';

const PanelHeader = ({ name }) => {
  return (
    <header className='panel-header'>
      <h1 className='title-font'>{name}</h1>
      <Button
        type='link'
        size='large'
        style={{ fontSize: '24px' }}
        shape='round'
        className='title-font'
      >
        VIEW ALL
      </Button>
    </header>
  );
};

export default PanelHeader;
