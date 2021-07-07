import { useState, useEffect } from 'react';
import { Row, Typography } from 'antd';
import axios from 'axios';

// components
import TaggedGames from '../userPartials/TaggedGames';

const WelcomeBack = () => {
  const [actionList, setActionList] = useState(null);
  const [adventureList, setAdventureList] = useState(null);
  const [atmosphericList, setAtmosphericList] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get('/api/games/tags/action'),
      axios.get('/api/games/tags/crafting'),
      axios.get('/api/games/tags/Atmospheric'),
    ]).then((all) => {
      setActionList(all[0].data.list.slice(1, 8));
      setAdventureList(all[1].data.list.slice(1, 8));
      setAtmosphericList(all[2].data.list.slice(1, 8));
    });
  }, []);
  return (
    <Row justify='center'>
      <div>
        <Typography.Title level={3} className='main-font'>
          Check out these games you might not know!
        </Typography.Title>
        {adventureList && (
          <TaggedGames games={adventureList} tag='Adventure' showAdd={false} />
        )}
      </div>
      <div>
        {actionList && (
          <TaggedGames games={actionList} tag='Action' showAdd={false} />
        )}
      </div>
      <div>
        {atmosphericList && (
          <TaggedGames
            games={atmosphericList}
            tag='Atmospheric'
            showAdd={false}
          />
        )}
      </div>
    </Row>
  );
};

export default WelcomeBack;
