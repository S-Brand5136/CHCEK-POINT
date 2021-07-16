import { useState } from 'react';

import { Button, Spin } from 'antd';
import MostPlayedChart from '../charts/MostPlayedChart';
import BacklogChart from '../charts/BacklogChart';
import CompletedChart from '../charts/CompleteChart';

const MOST_PLAYED = 'MOST PLAYED';
const BACKLOG = 'BACKLOG';
const COMPELTED = 'COMPLETED';
const LOADING = 'LOADING';

const UserStats = () => {
  const [chartSelect, setChartSelect] = useState(MOST_PLAYED);

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
            TOP SPEED RUNS
          </Button>
        </div>
      </header>
      <main className='panel-body chart-body'>
        {chartSelect === MOST_PLAYED && <MostPlayedChart />}
        {chartSelect === BACKLOG && <BacklogChart />}
        {chartSelect === COMPELTED && <CompletedChart />}
        {chartSelect === LOADING && <Spin />}
      </main>
    </div>
  );
};

export default UserStats;
