import { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import everyone from '../../../img/esrb_10.png';
import mature from '../../../img/esrb_mature.png';
import teen from '../../../img/esrb_teen.svg';
import pending from '../../../img/esrb_pending.png';
import { Button, Typography } from 'antd';

import ListModal from './ListModal';
import RatingModal from './RatingModal';

const GameHeader = ({
  game,
  user,
  lists,
  userCollection,
  getDetails,
  reload,
}) => {
  const [scoreColour, setScoreColour] = useState('red');
  const [textColour, setTextColour] = useState('white');
  const [esrbRating, setEsrbRating] = useState(pending);
  const [isVisible, setIsVisible] = useState(false);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (game) {
      if (game.metacritic_score > 75) {
        setScoreColour('green');
      }
      if (game.metacritic_score > 40 && game.metacritic_score < 75) {
        setScoreColour('yellow');
        setTextColour('black');
      }
      if (game.esrb_rating.toLowerCase().startsWith('t')) {
        setEsrbRating(teen);
      }
      if (game.esrb_rating.toLowerCase().startsWith('m')) {
        setEsrbRating(mature);
      }
      if (game.esrb_rating.toLowerCase().startsWith('e')) {
        setEsrbRating(everyone);
      }
    }
  }, [game]);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <header className='game-header'>
      <div className='game-header-title'>
        <Typography.Title level={1}>
          {loading && !game ? (
            <Skeleton active paragraph={{ rows: 0 }} />
          ) : (
            game.name
          )}{' '}
          <span className='divider'> |</span>
        </Typography.Title>
      </div>

      <img
        style={{ borderRadius: '20px', height: '430px', width: '750px' }}
        className='game-card-image'
        alt={game && game.title}
        src={game && game.background_image}
      />

      <div className='header-items'>
        <div className='game-rating-bar'>
          {user && (
            <div className='button-container'>
              <Button
                type='info'
                size='large'
                className='game-add-btn'
                shape='round'
                onClick={() => setIsVisible(true)}
              >
                Add To...
              </Button>
              <Button
                type='info'
                size='large'
                className='game-add-btn'
                shape='round'
                onClick={() => setIsRatingVisible(true)}
              >
                Rate Game
              </Button>
            </div>
          )}
          <div style={{ marginLeft: '5rem' }}>
            <h4>
              Health:{' '}
              {game && game.avg > 0
                ? `${Number(game.avg)}%`
                : 'No ratings yet!'}
            </h4>
            <div className='progress-bar'>
              <div
                className='health'
                style={{ width: `${!game ? 0 : game.avg * 4.98}px` }}
              ></div>
            </div>
            <div className='rating_container'>
              <h4>Metacritic score: </h4>
              <div
                style={{
                  backgroundColor: `${scoreColour}`,
                  color: `${textColour}`,
                }}
                className='score_container'
              >
                <span className='score'>{game && game.metacritic_score}</span>
              </div>
              <div className='esrb_container'>
                <img src={esrbRating} alt='esrb_rating' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RatingModal
        user={user}
        game={game}
        visible={isRatingVisible}
        cancel={() => setIsRatingVisible(false)}
        reload={reload}
      />
      <ListModal
        userId={user && user.id}
        lists={lists}
        collection={userCollection}
        visible={isVisible}
        game={game}
        getDetails={getDetails}
        cancel={() => setIsVisible(false)}
      />
    </header>
  );
};

export default GameHeader;
