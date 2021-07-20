import React from 'react';

import { Col, Divider } from 'antd';

// components
import GameCard from '../GameCard';
import EmptyCard from './EmptyCard';

const TaggedGames = ({ games, tag, showAdd }) => {
  const gameCards = games.map((game, index) => (
    <Col lg={4} style={{ marginBottom: '2rem' }} key={index}>
      <GameCard image={game.background_image} title={game.name} id={game.id} />
    </Col>
  ));

  return (
    <>
      <Divider orientation='left'>{tag}</Divider>
      {showAdd && <EmptyCard />}
      {games.length !== 0 && games[0].id !== null && gameCards}
    </>
  );
};

export default TaggedGames;
