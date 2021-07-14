import { useState } from 'react';
import axios from 'axios';
import GameCard from './SearchGameCard';
import { Button, Form, Input, Modal, Row, Col, Spin, Alert } from 'antd';
import Notification from './Notification';

const SearchForm = ({ visible, setVisible }) => {
  const [Search, setSearch] = useState('');
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    setLoading(true);
    if (Search) {
      axios
        .get('/api/games/keyword/search', { params: { search: Search } })
        .then((res) => {
          setGames(res.data.list);
        })
        .then(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        })
        .catch((err) => {
          setLoading(false);
          Notification({
            type: 'error',
            description: 'Unable to find any games with that name!',
            title: 'Error',
          });
        });
    }
  };

  var gameCards = games.map((game) => (
    <Row
      lg={5}
      key={game.id}
      style={{ marginBottom: '3rem' }}
      align='middle'
      justify='center'
    >
      <GameCard
        visible={() => setVisible()}
        image={game.background_image}
        title={game.name}
        id={game.id}
      />
    </Row>
  ));

  return (
    <Modal
      centered
      footer={<Footer />}
      visible={visible}
      onCancel={() => {
        setVisible();
        setGames([]);
      }}
    >
      <h1 className='searchModalTitle' style={{ textAlign: 'center' }}>
        Search by Name
      </h1>
      <Form name='Search' layout='vertical'>
        <Form.Item name='search' className='searchModal'>
          <Input
            placeholder='Minecraft...'
            onChange={(e) => setSearch(e.target.value)}
            className='searchModal'
          />
        </Form.Item>

        <Form.Item name='submitButton' className='searchModal'>
          <Button
            type='primary'
            onClick={(e) => submitHandler(e)}
            shape='round'
            block
            style={{ height: 'auto' }}
            className='searchModal'
          >
            Search&nbsp;<i class='fas fa-search'></i>
          </Button>
        </Form.Item>
        <Form.Item name='results' align='middle' justify='center'>
          <Col justify='center' gutter='20' align='middle'>
            {loading ? (
              <>
                <br />
                <Spin
                  size='large'
                  tip='Looking for Games'
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <Alert message='' description='' type='info' />
                </Spin>
              </>
            ) : (
              gameCards
            )}
          </Col>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Footer = () => {
  return [<div></div>];
};

export default SearchForm;
