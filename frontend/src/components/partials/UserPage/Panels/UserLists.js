import React from 'react';
import { useHistory } from 'react-router-dom';

import PanelHeader from './PanelHeader';

import { Typography } from 'antd';

const UserLists = ({ lists }) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  const colours = [
    {
      backgroundImage: `linear-gradient(
    to top,
    rgba(181, 50, 55, 1),
    rgba(181, 50, 55, 0.5)
  )`,
    },
    {
      backgroundImage: `linear-gradient(
    to top,
    rgba(111, 68, 212, 1),
    rgba(111, 68, 212, 0.5)
  )`,
    },
    {
      backgroundImage: `linear-gradient(
    to top,
    rgba(10, 164, 162, 1),
    rgba(10, 164, 162, 0.5)
  )`,
    },
  ];

  function listBoxes() {
    const result = [];

    let counter = 0;
    for (const list in lists) {
      result.push(
        <section key={counter} onClick={() => clickHandler()}>
          <div style={colours[counter]}>
            <Typography.Title level={3}>{list}</Typography.Title>
            <Typography.Title level={4}>
              Total games in collection: {lists[list].length - 2}
            </Typography.Title>
          </div>
        </section>
      );
      counter++;
    }

    return result;
  }

  if (lists) {
    listBoxes(lists);
  }

  return (
    <div>
      <PanelHeader name={'LISTS'} />
      <main className='panel-body collections-container'>
        {lists && listBoxes()}
        <section onClick={() => history.push('/list/create')}>
          <div
            style={{
              backgroundImage: `linear-gradient(
                to top,
                rgba(54, 69, 79, 1),
                rgba(54, 69, 79, 0.5)
              )`,
            }}
          >
            <Typography.Title level={3}>
              Create a new list here!
            </Typography.Title>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserLists;
