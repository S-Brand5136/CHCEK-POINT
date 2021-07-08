import { useState, useEffect } from 'react';
import { Typography, Tabs } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import TaggedGames from '../partials/HomePagePartials/userPartials/TaggedGames';

const BrowsePage = () => {
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
  let { tag } = useParams();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
      ...(tag !== 'games' ? [axios.get(`/api/games/tags/${tag}`)] : []),
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
      if (tag !== 'games') settagList(all[9].data.list.slice(1, 8));
    });
  }, []);
  return (
    <>
      <Typography.Title level={3} className='main-font'>
        Explore through our Titles! Find Something New!
      </Typography.Title>
      <br />
      <Tabs tabPosition='left'>
        {tag === 'games' ? (
          <></>
        ) : (
          <Tabs.TabPane tab={capitalizeFirstLetter(tag)} key='1'>
            {tagList && (
              <TaggedGames games={tagList} tag={tag} showAdd={false} />
            )}
          </Tabs.TabPane>
        )}
        <Tabs.TabPane tab='All' key='2'>
          {allList && <TaggedGames games={allList} tag='All' showAdd={false} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Action' key='3'>
          {actionList && (
            <TaggedGames games={actionList} tag='Action' showAdd={false} />
          )}
        </Tabs.TabPane>

        <Tabs.TabPane tab='Atmospheric' key='4'>
          {atmosphericList && (
            <TaggedGames
              games={atmosphericList}
              tag='Atmospheric'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>

        <Tabs.TabPane tab='Adventure' key='5'>
          {adventureList && (
            <TaggedGames
              games={adventureList}
              tag='Adventure'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Singleplayer' key='6'>
          {singleplayerList && (
            <TaggedGames
              games={singleplayerList}
              tag='Singleplayer'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Multiplayer' key='7'>
          {multiplayerList && (
            <TaggedGames
              games={multiplayerList}
              tag='Multiplayer'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Sandbox' key='8'>
          {sandboxList && (
            <TaggedGames games={sandboxList} tag='Sandbox' showAdd={false} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='Exploration' key='9'>
          {explorationList && (
            <TaggedGames
              games={explorationList}
              tag='Exploration'
              showAdd={false}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab='FPS' key='10'>
          {fpsList && <TaggedGames games={fpsList} tag='FPS' showAdd={false} />}
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BrowsePage;
