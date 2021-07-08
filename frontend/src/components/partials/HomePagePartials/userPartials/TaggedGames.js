import React from 'react';

import { Row, Col, Divider } from 'antd';

// components
import GameCard from '../GameCard';
import EmptyCard from './EmptyCard';

const TaggedGames = ({ games, tag, showAdd }) => {
  const gameCards = games.map((game, index) => (
    <Col lg={3} key={index}>
      <GameCard image={game.background_image} title={game.name} id={game.id} />
    </Col>
  ));
  return (
    <section>
      <Row gutter='20'>
        <Divider orientation='left' style={{ width: '50%' }}>
          {tag}
        </Divider>
        {showAdd && <EmptyCard />}
        {games && gameCards}
      </Row>
    </section>
  );
};

export default TaggedGames;
