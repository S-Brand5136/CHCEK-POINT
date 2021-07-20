import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authContext } from '../../providers/AuthProvider';
import { Skeleton } from 'antd';
import GameHeader from '../partials/GamePage/GameHeader';
import TagsAside from '../partials/GamePage/TagsAside';
import GameStats from '../partials/GamePage/GameStats';

import { CalendarOutlined } from '@ant-design/icons';

const GamePage = ({ location }) => {
  const [game, setGame] = useState(null);
  const [tags, setTags] = useState(null);
  const [reload, setReload] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user, userCollection, getUserDetails } = useContext(authContext);

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
        getDetails={getUserDetails}
        reload={() => setReload(true)}
      />
      <main>
        <TagsAside tags={tags} />
        <section className='game-desc'>
          <h2>
            Released <span className='divider'> |</span>
          </h2>
          {loading ? (
            <Skeleton active />
          ) : (
            <p>
              <CalendarOutlined /> {game && game.released.slice(0, 10)}
            </p>
          )}
          <h2>
            About <span className='divider'> |</span>
          </h2>
          <div>{loading ? <Skeleton active /> : <p>{game.description}</p>}</div>
        </section>
      </main>
      <footer>
        <GameStats />
      </footer>
    </section>
  );
};

export default GamePage;
