import { useState } from 'react';
import axios from 'axios';

import { Col, Divider } from 'antd';

// components
import GameCard from '../GameCard';
import EmptyCard from './EmptyCard';
import DeleteModal from '../../DeleteModal';

const ListCards = ({ games, tag, showAdd, reload }) => {
  const [visible, setVisible] = useState(false);
  const [gameId, setGameId] = useState(null);

  const deleteHandler = async () => {
    await axios.delete(`/api/lists/delete/${gameId}`).then(() => {
      return reload();
    });
  };

  const gameCards = games.map((game, index) => (
    <Col lg={5} style={{ marginBottom: '2rem' }} key={index}>
      <GameCard
        image={game.background_image}
        title={game.name}
        id={game.id}
        hours={game.hours_played}
        onDelete={() => {
          setVisible(true);
          setGameId(game.game_id);
        }}
      />
    </Col>
  ));

  return (
    <>
      <Divider orientation='left'>{tag}</Divider>
      {showAdd && <EmptyCard />}
      {games.length !== 0 && games[0].id !== null && gameCards}
      <DeleteModal
        title={'Are you sure you want to remove the game from this list?'}
        description={'Once its done it cannot be undone!'}
        visible={visible}
        setVisible={() => setVisible(false)}
        userAnswer={(answer) => answer && deleteHandler()}
      />
    </>
  );
};
export default ListCards;
