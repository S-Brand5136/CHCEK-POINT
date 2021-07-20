import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { authContext } from '../../providers/AuthProvider';
import GameHeader from '../partials/GamePage/GameHeader';
import TagsAside from '../partials/GamePage/TagsAside';
import GameStats from '../partials/GamePage/GameStats';
import { Skeleton } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

const GamePage = () => {
  const [game, setGame] = useState(null);
  const [tags, setTags] = useState(null);
  const [reload, setReload] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user, userLists, userCollection, getUserDetails } =
    useContext(authContext);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/games/${id}`)
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
  }, [id, reload]);

  return (
    <section className='game-page'>
      <GameHeader
        game={game}
        user={user}
        userCollection={userCollection}
        getDetails={getUserDetails}
        lists={userLists}
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
