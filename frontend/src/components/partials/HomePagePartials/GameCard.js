import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card } from 'antd';
import {
  EditFilled,
  CloseCircleFilled,
  InfoCircleFilled,
} from '@ant-design/icons';

const GameCard = ({ image, title, id, hours, onDelete, visible }) => {
  const history = useHistory();

  return (
    <Card
      style={{ borderRadius: '20px' }}
      hoverable
      cover={
        <img
          style={{ borderRadius: '20px 20px 0 0' }}
          className='game-card-image'
          alt={title}
          src={image}
          onClick={() => history.push(`/games/${id}`)}
        />
      }
      actions={
        hours >= 0 && [
          <InfoCircleFilled onClick={() => history.push(`/games/${id}`)} />,
          <EditFilled key='edit' />,
          <CloseCircleFilled
            onClick={() => {
              onDelete();
              if (visible) {
                visible();
              }
            }}
            className='close-button'
          />,
        ]
      }
    >
      <Card.Meta
        className='main-font'
        title={title}
        description={hours >= 0 ? `Hours spent playing: ${hours}` : ''}
      />
    </Card>
  );
};

export default GameCard;
