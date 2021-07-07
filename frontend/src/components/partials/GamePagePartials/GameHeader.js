import React from 'react';

import { Button, Typography } from 'antd';

const GameHeader = ({ game }) => {
  return (
    <header className='game-header'>
      <div className='game-header-title'>
        <Typography.Title level={1}>
          {game && game.name} <span className='divider'> |</span>
        </Typography.Title>
      </div>
      <img
        style={{ borderRadius: '20px', height: '430px', width: '750px' }}
        className='game-card-image'
        alt={game && game.title}
        src={game && game.background_image}
      />
      <div className='header-items'>
        <div className='game-rating-bar'>
          <Button
            type='primary'
            size='large'
            className='game-add-btn'
            shape='round'
          >
            Add To...
          </Button>
          <div style={{ marginLeft: '5rem' }}>
            <h4>
              Health:{' '}
              {game && game.avg > 0
                ? `${Number(game.avg)}%`
                : 'No ratings yet!'}
            </h4>
            <div className='progress-bar'>
              <div
                className='health'
                style={{ width: `${!game ? 0 : game.avg * 4.98}px` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
