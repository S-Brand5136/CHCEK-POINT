import { useEffect, useState } from 'react';
import axios from 'axios';

import { Typography, Row, Col } from 'antd';

// Components
import GameCard from './GameCard';

const BrowseSection = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get('/api/games', { params: { limit: 8 } })
      .then((res) => {
        setGames(res.data.catalog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const gameCards = games.map((game) => (
    <Col lg={5} key={game.id} style={{ marginBottom: '3rem' }}>
      <GameCard image={game.background_image} title={game.name} id={game.id} />
    </Col>
  ));

  return (
    <section className='browse-section'>
      <Typography.Title level={1} className='title'>
        Check out These Titles <span className='divider'>|</span>{' '}
      </Typography.Title>
      <Row justify='center' gutter='20'>
        {games.length > 0 && gameCards}
      </Row>
    </section>
  );
};

export default BrowseSection;
