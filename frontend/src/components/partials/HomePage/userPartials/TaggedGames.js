import React from 'react';

import { Row, Col, Divider } from 'antd';

// components
import GameCard from '../GameCard';

const TaggedGames = ({ games, tag }) => {
  const gameCards = games.map((game) => (
    <Col lg={3} key={game.id}>
      <GameCard image={game.background_image} title={game.name} id={game.id} />
    </Col>
  ));
  return (
    <section>
      <Row gutter='20'>
        <Divider orientation='left' style={{ width: '50%' }}>
          {tag}
        </Divider>
        {games && gameCards}
      </Row>
    </section>
  );
};

export default TaggedGames;
