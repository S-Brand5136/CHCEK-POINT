import { useEffect, useState } from 'react';
import { Row, Button, Col, Typography, Image, Tabs } from 'antd';
import axios from 'axios';

// components
import TaggedGames from './userPartials/TaggedGames';

const UserHero = ({ username }) => {
  const [actionList, setActionList] = useState(null);
  const [adventureList, setAdventureList] = useState(null);
  const [atmosphericList, setAtmosphericList] = useState(null);

  useEffect(() => {
    axios.get('/api/games/tags/action').then((res) => {
      setActionList(res.data.list.slice(1, 8));
    });
    axios.get('/api/games/tags/crafting').then((res) => {
      setAdventureList(res.data.list.slice(1, 8));
    });
    axios.get('/api/games/tags/Atmospheric').then((res) => {
      setAtmosphericList(res.data.list.slice(1, 8));
    });
  }, []);

  return (
    <>
      <Typography.Title
        level={1}
        className='main-font'
        style={{ marginBottom: '2rem' }}
      >
        Welcome Back, {username} !
      </Typography.Title>
      <Tabs tabPosition='left'>
        <Tabs.TabPane tab='Browse' key='1'>
          <Row justify='center'>
            <Col lg={18} sm={24}>
              <Typography.Title
                level={3}
                className='hero-text-medium main-font'
              >
                Check out these games you might not know!
              </Typography.Title>
              {adventureList && (
                <TaggedGames games={adventureList} tag='Adventure' />
              )}
            </Col>
            <Col lg={18}>
              {actionList && <TaggedGames games={actionList} tag='Action' />}
            </Col>
            <Col lg={18}>
              {atmosphericList && (
                <TaggedGames games={atmosphericList} tag='Atmospheric' />
              )}
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab='Activity' key='2'></Tabs.TabPane>

        <Tabs.TabPane tab='Lists' key='3'></Tabs.TabPane>

        <Tabs.TabPane tab='Collection' key='4'></Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default UserHero;
