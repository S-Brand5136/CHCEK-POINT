import React from 'react';

import { Card, Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const EmptyCard = () => {
  return (
    <Card
      style={{ borderRadius: '20px' }}
      hoverable
      cover={
        <Row justify='center'>
          <Col>
            <PlusCircleOutlined
              style={{
                borderRadius: '20px',
                fontSize: '3rem',
                position: 'relative',
                top: '3.5rem',
              }}
              className='game-card-image'
            />
          </Col>
        </Row>
      }
      onClick={() => console.log('clicked')}
    >
      <Card.Meta className='main-font' title='Add to your list!' />
    </Card>
  );
};

export default EmptyCard;
