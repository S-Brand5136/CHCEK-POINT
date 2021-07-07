import { useState, useEffect } from 'react';
import axios from 'axios';

import GameHeader from '../partials/GamePagePartials/GameHeader';
import TagsAside from '../partials/GamePagePartials/TagsAside';

const GamePage = ({ location }) => {
  const [game, setGame] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const gameId = location.pathname.slice(-2);
    axios.get(`/api/games/${gameId}`).then((res) => {
      setGame(res.data.game[0]);
      setTags(res.data.tag_list);
    });
  }, [location.pathname]);

  return (
    <section className='game-page'>
      <GameHeader game={game} />
      <main>
        <TagsAside tags={tags} />
        <section className='game-desc'>
          <h2>
            About <span className='divider'> |</span>
          </h2>
          <div>
            <p>{game && game.description}</p>
          </div>
          <div>
            <h4>MetaCritic Score</h4>
          </div>
          <div>
            <h4>ESRB Rating</h4>
          </div>
        </section>
      </main>
    </section>
  );
};

export default GamePage;
