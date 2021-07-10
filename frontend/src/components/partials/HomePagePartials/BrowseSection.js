import { useEffect, useState } from 'react';
import axios from 'axios';

import { Typography, Row, Col } from 'antd';

// Components
import GameCard from './GameCard';

const BrowseSection = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios.get('/api/games', { params: { limit: 8 } }).then((res) => {
      if (mounted) {
        setGames((state) => res.data.catalog);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);

  function gameCards() {
    games.map((game) => (
      <Col lg={5} key={game.id} style={{ marginBottom: '3rem' }}>
        <GameCard
          image={game.background_image}
          title={game.name}
          id={game.id}
        />
      </Col>
    ));
  }

  return (
    <section className='browse-section'>
      <Typography.Title level={1} className='title'>
        Check out These Titles <span className='divider'>|</span>{' '}
      </Typography.Title>
      <Row justify='center' gutter='20'>
        {games && gameCards}
      </Row>
    </section>
  );
};

export default BrowseSection;
