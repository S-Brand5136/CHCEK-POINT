import { useState, useEffect } from 'react';
import { Typography, Tabs } from 'antd';
import axios from 'axios';

import TaggedGames from '../partials/HomePagePartials/userPartials/TaggedGames';

const BrowsePage = (tag) => {
  const [allList, setallList] = useState(null);
  const [actionList, setActionList] = useState(null);
  const [adventureList, setAdventureList] = useState(null);
  const [atmosphericList, setAtmosphericList] = useState(null);
  const [multiplayerList, setmultiplayerList] = useState(null);
  const [sandboxList, setsandboxList] = useState(null);
  const [singleplayerList, setsingleplayerList] = useState(null);
  const [explorationList, setexplorationList] = useState(null);
  const [fpsList, setfpsList] = useState(null);
  const [tagList, settagList] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get('/api/games/tags/action'),
      axios.get('/api/games/tags/crafting'),
      axios.get('/api/games/tags/Atmospheric'),
      axios.get('/api/games/tags/Multiplayer'),
      axios.get('/api/games/tags/Sandbox'),
      axios.get('/api/games/tags/Singleplayer'),
      axios.get('/api/games/tags/Exploration'),
      axios.get('/api/games/tags/FPS'),
      axios.get('/api/games'),
    ]).then((all) => {
      setActionList(all[0].data.list.slice(1, 8));
      setAdventureList(all[1].data.list.slice(1, 8));
      setAtmosphericList(all[2].data.list.slice(1, 8));
      setmultiplayerList(all[3].data.list.slice(1, 8));
      setsandboxList(all[4].data.list.slice(1, 8));
      setsingleplayerList(all[5].data.list.slice(1, 8));
      setexplorationList(all[6].data.list.slice(1, 8));
      setfpsList(all[7].data.list.slice(1, 8));
      setallList(all[8].data.catalog);
    });
  }, [tag]);
  return (
    <>
      <Typography.Title level={3} className='main-font'>
        Explore through our Titles! Find Something New!
      </Typography.Title>
      <br />
      <Tabs tabPosition='left'>
        <Tabs.TabPane tab='All' key='1'>
          {allList && <TaggedGames games={allList} tag='All' showAdd={false} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Action' key='2'>
          {actionList && (
            <TaggedGames games={actionList} tag='Action' showAdd={false} />
          )}
        </Tabs.TabPane>

        <Tabs.TabPane tab='Atmospheric' key='3'>
          {atmosphericList && (
            <TaggedGames
              games={atmosphericList}
              tag='Atmospheric'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>

        <Tabs.TabPane tab='Adventure' key='4'>
          {adventureList && (
            <TaggedGames
              games={adventureList}
              tag='Adventure'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Singleplayer' key='5'>
          {singleplayerList && (
            <TaggedGames
              games={singleplayerList}
              tag='Singleplayer'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Multiplayer' key='6'>
          {multiplayerList && (
            <TaggedGames
              games={multiplayerList}
              tag='Multiplayer'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Sandbox' key='7'>
          {sandboxList && (
            <TaggedGames games={sandboxList} tag='Sandbox' showAdd={false} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Exploration' key='8'>
          {explorationList && (
            <TaggedGames
              games={explorationList}
              tag='Exploration'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='FPS' key='9'>
          {fpsList && <TaggedGames games={fpsList} tag='FPS' showAdd={false} />}
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BrowsePage;
