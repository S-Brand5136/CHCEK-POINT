import React from 'react';
import FeatureCard from './FeatureCard';

import { Row, Col } from 'antd';
import {
  ExclamationCircleOutlined,
  MonitorOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const FeatureCardList = () => {
  const cards = [
    {
      title: ` Track Games`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
      consectetur nihil dicta numquam quidem laborum placeat, maiores
      aspernatur molestiae enim quaerat, vitae aut provident ut
      temporibus! Esse labore molestiae sed. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Eos nulla et iure quia, ipsam,
      molestias asperiores velit architecto sunt eius ad nam. Ipsum odit
      explicabo officia libero dolorem reiciendis autem.`,
      icon: <ExclamationCircleOutlined className='icon-highlight' />,
    },
    {
      title: ` Discover`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
      consectetur nihil dicta numquam quidem laborum placeat, maiores
      aspernatur molestiae enim quaerat, vitae aut provident ut
      temporibus! Esse labore molestiae sed. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Eos nulla et iure quia, ipsam,
      molestias asperiores velit architecto sunt eius ad nam. Ipsum odit
      explicabo officia libero dolorem reiciendis autem.`,
      icon: <MonitorOutlined className='icon-highlight' />,
    },
    {
      title: ` Connect`,
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
      consectetur nihil dicta numquam quidem laborum placeat, maiores
      aspernatur molestiae enim quaerat, vitae aut provident ut
      temporibus! Esse labore molestiae sed. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Eos nulla et iure quia, ipsam,
      molestias asperiores velit architecto sunt eius ad nam. Ipsum odit
      explicabo officia libero dolorem reiciendis autem.`,
      icon: <MessageOutlined className='icon-highlight' />,
    },
  ];
  const cardList = cards.map((card) => (
    <Col size='small' bordered={false} className='card'>
      <FeatureCard
        title={card.title}
        description={card.description}
        icon={card.icon}
      />
    </Col>
  ));

  return (
    <Row justify='center' style={{ margin: '10rem 11rem 0 11rem' }}>
      {cardList}
    </Row>
  );
};

export default FeatureCardList;
