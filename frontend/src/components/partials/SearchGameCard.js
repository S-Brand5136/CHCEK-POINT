import React from 'react';

import { Card } from 'antd';

const GameCard = ({ image, title, id }) => {
  return (
    <Card
      style={{ borderRadius: '20px' }}
      hoverable
      cover={
        <a href={`/games/${id}`}>
          <img
            style={{ borderRadius: '20px' }}
            className='search-card-image'
            alt={title}
            src={image}
            height={'200vh'}
          />
        </a>
      }
    >
      <Card.Meta className='main-font' title={title} />
    </Card>
  );
};

export default GameCard;
