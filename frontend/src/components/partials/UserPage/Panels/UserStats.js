import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Spin } from 'antd';
import MostPlayedChart from '../charts/MostPlayedChart';
import BacklogChart from '../charts/BacklogChart';
import TopLists from '../charts/TopLists';

const MOST_PLAYED = 'MOST PLAYED';
const BACKLOG = 'BACKLOG';
const COMPELTED = 'COMPLETED';
const LOADING = 'LOADING';

const UserStats = ({ user }) => {
  const [chartSelect, setChartSelect] = useState(MOST_PLAYED);
  const [mostPlayed, setMostPlayed] = useState(null);
  const [backlog, setBacklog] = useState(null);
  const [lists, setlists] = useState(null);

  useEffect(() => {
    if (user) {
      axios.get(`/api/users/${user.id}/stats/`).then((res) => {
        setMostPlayed(res.data.userStats[0]);
        setBacklog(res.data.userStats[1]);
      });
      axios.get(`/api/lists/stats/${user.id}`).then((res) => {
        setlists(res.data.list);
      });
    }
  }, [user]);

  const clickHandler = (chart) => {
    setChartSelect(LOADING);
    setTimeout(() => {
      setChartSelect(chart);
    }, 750);
  };

  return (
    <div className='user-lists-stats'>
      <header className='panel-header'>
        <h1 className='title-font'>STATS</h1>
        <div>
          <Button
            type='link'
            size='large'
            style={{ fontSize: '24px' }}
            shape='round'
            className='title-font'
            onClick={() => clickHandler(MOST_PLAYED)}
          >
            MOST PLAYED
          </Button>
          <span className='divider-highlight'> | </span>
          <Button
            type='link'
            size='large'
            style={{ fontSize: '24px' }}
            shape='round'
            className='title-font'
            onClick={() => clickHandler(BACKLOG)}
          >
            LONGEST TIME IN BACKLOG
          </Button>
          <span className='divider-highlight'> | </span>
          <Button
            type='link'
            size='large'
            style={{ fontSize: '24px' }}
            shape='round'
            className='title-font'
            onClick={() => clickHandler(COMPELTED)}
          >
            LARGEST COLLECTIONS
          </Button>
        </div>
      </header>
      <main className='panel-body chart-body'>
        {chartSelect === MOST_PLAYED && (
          <MostPlayedChart mostPlayed={mostPlayed} />
        )}
        {chartSelect === BACKLOG && <BacklogChart backlog={backlog} />}
        {chartSelect === COMPELTED && <TopLists lists={lists} />}
        {chartSelect === LOADING && <Spin />}
      </main>
    </div>
  );
};

export default UserStats;
