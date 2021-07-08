import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const GameCard = ({ image, title, id }) => {
  return (
    <Card
      style={{ borderRadius: '20px' }}
      hoverable
      cover={
        <Link to={`/games/${id}`}>
          <img
            style={{ borderRadius: '20px' }}
            className='search-card-image'
            alt={title}
            src={image}
            height={'200vh'}
          />
        </Link>
      }
    >
      <Card.Meta className='main-font' title={title} />
    </Card>
  );
};

export default GameCard;
