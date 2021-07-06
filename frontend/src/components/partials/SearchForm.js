import { useState, useContext } from 'react';
import axios from 'axios';

import { Button, Form, Input, Modal, Spin } from 'antd';

const SearchForm = ({ visible, setVisible }) => {
  const [Search, setSearch] = useState('');
  const submitHandler = (e) => {
    axios
      .get('/api/games/keyword/search', { params: { search: Search } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal centered footer={<Footer />} visible={visible} onCancel={setVisible}>
      <h2 style={{ textAlign: 'center' }}>Search For Games</h2>
      <Form name='Search' layout='vertical'>
        <Form.Item name='search'>
          <Input
            placeholder='Minecraft...'
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Item>
        <Button
          type='primary'
          onClick={(e) => submitHandler(e)}
          shape='round'
          block
        >
          Search
        </Button>
      </Form>
    </Modal>
  );
};

const Footer = () => {
  return [<footer key={1}></footer>];
};

export default SearchForm;
