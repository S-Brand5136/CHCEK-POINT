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
      description: `
      Each gamer has their own list of games they play, played, and put off. Keep track of those titles with ease by adding them to a Collection: Current, Completed, Backlog, and Dropped. Want to sort games further? Users are also able to create custom lists to add games to, which can be displayed on your profile.`,
      icon: <ExclamationCircleOutlined className='icon-highlight' />,
    },
    {
      title: ` Discover`,
      description: `Browse through the widest range of video games, and filter through them too! With hundreds of titles to choose from, and various tags to sort them with, you can find games that suit your taste best and add them to your Collection or Lists. View a game's overall score based on how Users rate them.`,
      icon: <MonitorOutlined className='icon-highlight' />,
    },
    {
      title: ` Connect`,
      description: `View activity of other Users as well as your own in the comfort of your own home page. User activity is also displayed on your profile, along with additional information about you. From consoles and in-game names, to timezone and pronouns, customize your page to say as much as you want about yourself!`,
      icon: <MessageOutlined className='icon-highlight' />,
    },
  ];
  const cardList = cards.map((card, index) => (
    <Col size='small' lg={5} key={index} bordered='false' className='card'>
      <FeatureCard
        title={card.title}
        description={card.description}
        icon={card.icon}
      />
    </Col>
  ));

  return (
    <Row justify='space-around' style={{ marginTop: '10rem' }}>
      {cardList}
    </Row>
  );
};

export default FeatureCardList;
