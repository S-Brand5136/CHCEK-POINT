import { useState, useEffect } from 'react';
import { Row, Typography, Spin, Alert } from 'antd';
import axios from 'axios';

// components
import TaggedGames from '../userPartials/TaggedGames';

const WelcomeBack = () => {
  const [actionList, setActionList] = useState(null);
  const [adventureList, setAdventureList] = useState(null);
  const [atmosphericList, setAtmosphericList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get('/api/games/tags/action'),
      axios.get('/api/games/tags/crafting'),
      axios.get('/api/games/tags/Atmospheric'),
    ])
      .then((all) => {
        setActionList(all[0].data.list.slice(1, 8));
        setAdventureList(all[1].data.list.slice(1, 8));
        setAtmosphericList(all[2].data.list.slice(1, 8));
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }, []);

  return (
    <Row justify='left' style={{ paddingRight: '4rem' }}>
      <div>
        <Typography.Title level={1} className='title-font'>
          Check out these games you might not know!
        </Typography.Title>
        <Row gutter='20'>
          {!loading ? (
            <TaggedGames
              games={adventureList}
              tag='Adventure'
              showAdd={false}
            />
          ) : (
            <div className='fetch'>
              <br />
              <br />
              <Spin
                size='large'
                tip='Fetching Games'
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit',
                }}
              >
                <Alert message='' description='' type='info' />
              </Spin>
            </div>
          )}
        </Row>
      </div>
      <Row gutter='20'>
        {!loading && (
          <TaggedGames games={actionList} tag='Action' showAdd={false} />
        )}
      </Row>
      <Row gutter='20'>
        {!loading && (
          <TaggedGames
            games={atmosphericList}
            tag='Atmospheric'
            showAdd={false}
          />
        )}
      </Row>
    </Row>
  );
};

export default WelcomeBack;
