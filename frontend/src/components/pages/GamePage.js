import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authContext } from '../../providers/AuthProvider';
import { Skeleton } from 'antd';
import GameHeader from '../partials/GamePage/GameHeader';
import TagsAside from '../partials/GamePage/TagsAside';
import UserDashboard from '../partials/GamePage/UserDashboard';

import { CalendarOutlined } from '@ant-design/icons';

const GamePage = ({ location }) => {
  const [game, setGame] = useState(null);
  const [tags, setTags] = useState(null);
  const [reload, setReload] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user, userLists, userCollection, getUserDetails } =
    useContext(authContext);

  useEffect(() => {
    const gameId = location.pathname.slice(-2);
    axios
      .get(`/api/games/${gameId}`)
      .then((res) => {
        setGame(res.data.game[0]);
        setTags(res.data.tag_list);
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    setReload(null);
  }, [location.pathname, reload]);

  return (
    <section className='game-page'>
      <GameHeader
        game={game}
        user={user}
        userCollection={userCollection}
        lists={userLists}
        getDetails={getUserDetails}
        reload={() => setReload(true)}
      />
      <main>
        <TagsAside tags={tags} />
        <section className='game-desc'>
          <h2>
            Released <span className='divider'> |</span>
          </h2>
          <p>
            <CalendarOutlined />{' '}
            {loading ? <Skeleton active /> : game.released.slice(0, 10)}
          </p>
          <h2>
            About <span className='divider'> |</span>
          </h2>
          <div>
            <p>{loading ? <Skeleton active /> : game.description}</p>
          </div>
        </section>
      </main>
      <footer>
        <UserDashboard />
      </footer>
    </section>
  );
};

export default GamePage;
