import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authContext } from '../../providers/AuthProvider';

import GameHeader from '../partials/GamePagePartials/GameHeader';
import TagsAside from '../partials/GamePagePartials/TagsAside';
import UserDashboard from '../partials/GamePagePartials/UserDashboard';

const GamePage = ({ location }) => {
  const [game, setGame] = useState(null);
  const [tags, setTags] = useState(null);

  const { user, userLists, userCollection, getUserDetails } =
    useContext(authContext);

  useEffect(() => {
    const gameId = location.pathname.slice(-2);
    axios.get(`/api/games/${gameId}`).then((res) => {
      setGame(res.data.game[0]);
      setTags(res.data.tag_list);
    });
  }, [location.pathname]);

  return (
    <section className='game-page'>
      <GameHeader
        game={game}
        user={user}
        userCollection={userCollection}
        lists={userLists}
        getDetails={getUserDetails}
      />
      <main>
        <TagsAside tags={tags} />
        <section className='game-desc'>
          <h2>
            About <span className='divider'> |</span>
          </h2>
          <div>
            <p>{game && game.description}</p>
          </div>
        </section>
      </main>
      <footer>{user && <UserDashboard />}</footer>
    </section>
  );
};

export default GamePage;
