import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';

const GameCard = ({ image, title, id }) => {
  return (
    <Link to={`/games/${id}`}>
      <Card
        style={{ borderRadius: '20px' }}
        hoverable
        cover={
          <img
            style={{ borderRadius: '20px' }}
            className='game-card-image'
            alt={title}
            src={image}
          />
        }
      >
        <Card.Meta className='main-font' title={title} />
      </Card>
    </Link>
  );
};

export default GameCard;
