import { useState, useEffect } from 'react';
import { Typography, Tabs, Spin, Alert } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import TaggedGames from '../partials/HomePagePartials/userPartials/TaggedGames';
import { Row } from 'antd';

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
  const [loading, setLoading] = useState(true);
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
    ])
      .then((all) => {
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
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [tag]);

  return (
    <main className='background-container' style={{ padding: '4rem 0 4rem 0' }}>
      <section
        className='hero-section'
        style={{ margin: '0 3rem 0  3rem', padding: '1rem 2rem 1rem 2rem' }}
      >
        <Typography.Title
          level={2}
          style={{ margin: '0rem 0rem 2rem 1rem', paddingTop: '1rem' }}
          className='title-font'
        >
          Explore through our Titles! Find something new!
        </Typography.Title>
        <br />
        <Tabs tabPosition='left'>
          {tag === 'games' ? (
            <></>
          ) : (
            <Tabs.TabPane tab={capitalizeFirstLetter(tag)} key='1'>
              {!loading ? (
                tagList.length > 0 && (
                  <Row gutter='20'>
                    <TaggedGames
                      games={tagList}
                      tag={capitalizeFirstLetter(tag)}
                      showAdd={false}
                      style={{ marginBottom: '1rem' }}
                    />
                  </Row>
                )
              ) : (
                <>
                  <br />
                  <br />
                  <br />
                  <Spin
                    size='large'
                    tip='Fetching Games'
                    style={{
                      color: 'inherit',
                      textDecoration: 'inherit',
                      backgroundColor: '#ecf0f3',
                    }}
                  >
                    <Alert
                      style={{
                        textDecoration: 'inherit',
                      }}
                      type='info'
                    />
                  </Spin>
                </>
              )}
            </Tabs.TabPane>
          )}
          <Tabs.TabPane tab='All' key='2'>
            {!loading ? (
              <Row gutter='20'>
                <TaggedGames games={allList} tag='All' showAdd={false} />
              </Row>
            ) : (
              <>
                <br />
                <Spin
                  size='large'
                  tip='Fetching Games'
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit',
                    backgroundColor: '#ecf0f3',
                  }}
                >
                  <Alert message='' description='' type='info' />
                </Spin>
              </>
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab='Action' key='3'>
            {actionList && (
              <Row gutter='20'>
                <TaggedGames games={actionList} tag='Action' showAdd={false} />
              </Row>
            )}
          </Tabs.TabPane>

          <Tabs.TabPane tab='Atmospheric' key='4'>
            {atmosphericList && (
              <Row gutter='20'>
                <TaggedGames
                  games={atmosphericList}
                  tag='Atmospheric'
                  showAdd={false}
                />
              </Row>
            )}
          </Tabs.TabPane>

          <Tabs.TabPane tab='Adventure' key='5'>
            {adventureList && (
              <Row gutter='20'>
                <TaggedGames
                  games={adventureList}
                  tag='Adventure'
                  showAdd={false}
                />
              </Row>
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab='Singleplayer' key='6'>
            {singleplayerList && (
              <Row gutter='20'>
                <TaggedGames
                  games={singleplayerList}
                  tag='Singleplayer'
                  showAdd={false}
                />
              </Row>
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab='Multiplayer' key='7'>
            {multiplayerList && (
              <Row gutter='20'>
                <TaggedGames
                  games={multiplayerList}
                  tag='Multiplayer'
                  showAdd={false}
                />
              </Row>
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab='Sandbox' key='8'>
            {sandboxList && (
              <Row gutter='20'>
                <TaggedGames
                  games={sandboxList}
                  tag='Sandbox'
                  showAdd={false}
                />
              </Row>
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab='Exploration' key='9'>
            {explorationList && (
              <Row gutter='20'>
                <TaggedGames
                  games={explorationList}
                  tag='Exploration'
                  showAdd={false}
                />
              </Row>
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab='FPS' key='10'>
            {fpsList && (
              <Row gutter='20'>
                <TaggedGames games={fpsList} tag='FPS' showAdd={false} />
              </Row>
            )}
          </Tabs.TabPane>
        </Tabs>
      </section>
    </main>
  );
};

export default BrowsePage;
