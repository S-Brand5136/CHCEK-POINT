import React from 'react';

import { useHistory } from 'react-router-dom';
import PanelHeader from './PanelHeader';

import { Typography } from 'antd';

const UserCollections = ({ collections }) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <div>
      <PanelHeader name={'COLLECTIONS'} />
      <main className='panel-body collections-container'>
        <section onClick={() => clickHandler()}>
          <div
            style={{
              backgroundImage: `linear-gradient(
          to top,
          rgba(68, 76, 178, 1),
          rgba(68, 76, 178, 0.5)
        )`,
            }}
          >
            <Typography.Title level={3}>Current</Typography.Title>
            <Typography.Title level={4}>
              Total games in collection:{' '}
              {collections && collections.Current.length - 2}
            </Typography.Title>
          </div>
        </section>
        <section onClick={() => clickHandler()}>
          <div
            style={{
              backgroundImage: `linear-gradient(
          to top,
          rgba(47, 164, 46, 1),
          rgba(47, 164, 46, 0.5)
        )`,
            }}
          >
            <Typography.Title level={3}>Backlog</Typography.Title>
            <Typography.Title level={4}>
              Total games in collection:{' '}
              {collections && collections.Backlog.length - 2}
            </Typography.Title>
          </div>
        </section>
        <section onClick={() => clickHandler()}>
          <div
            style={{
              backgroundImage: `linear-gradient(
          to top,
          rgba(144, 40, 184, 1),
          rgba(144, 40, 184, 0.5)
        )`,
            }}
          >
            <Typography.Title level={3}>Completed</Typography.Title>
            <Typography.Title level={4}>
              Total games in collection:{' '}
              {collections && collections.Completed.length - 2}
            </Typography.Title>
          </div>
        </section>
        <section onClick={() => clickHandler()}>
          <div
            style={{
              backgroundImage: `linear-gradient(
          to top,
          rgba(180, 93, 45, 1),
          rgba(180, 93, 45, 0.5)
        )`,
            }}
          >
            <Typography.Title level={3}>Dropped</Typography.Title>
            <Typography.Title level={4}>
              Total games in collection:{' '}
              {collections && collections.Dropped.length - 2}
            </Typography.Title>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserCollections;
