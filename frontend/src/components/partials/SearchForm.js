import { useState } from 'react';
import axios from 'axios';
import GameCard from './SearchGameCard';
import {
  Button,
  Form,
  Input,
  Modal,
  Row,
  Col,
  Skeleton,
  Spin,
  Alert,
} from 'antd';

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
          console.log(err);
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
      <GameCard image={game.background_image} title={game.name} id={game.id} />
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
      <h2 style={{ textAlign: 'center' }}>Search by Name</h2>
      <Form name='Search' layout='vertical'>
        <Form.Item name='search'>
          <Input
            placeholder='Minecraft...'
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Item>

        <Form.Item name='submitButton'>
          <Button
            type='primary'
            onClick={(e) => submitHandler(e)}
            shape='round'
            block
          >
            Search
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
