import { useState } from 'react';
import axios from 'axios';
import PostResult from './PostResult';
import { Form, Button, Spin, Input } from 'antd';

const CreateForm = ({ userId, getDetails }) => {
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const clickHandler = () => {
    console.log(name, userId);
    if (name && userId) {
      setLoading(true);
      axios
        .post(`/api/lists/create`, {
          user_id: userId,
          list_title: name,
          category: 'user_made',
        })
        .then((data) => {
          console.log(data);
        });
      getDetails(userId);
      setTimeout(() => {
        setLoading(false);
        setName(null);
        setSuccess(true);
      }, 2000);
    }
  };

  return (
    <section className='add-form'>
      {!success ? (
        <Form
          name='login'
          layout='vertical'
          style={{ margin: '5rem 5rem 5rem 5rem' }}
        >
          <Form.Item
            label='What would you like to name your new List?'
            name='name'
            rules={[
              { required: true, message: 'Please input a name for the list!' },
            ]}
          >
            <Input
              style={{ width: '100%' }}
              min={3}
              maxLength={32}
              placeholder={'List name...'}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            {!loading ? (
              <Button
                type='primary'
                shape='round'
                onClick={() => {
                  clickHandler();
                }}
                block
              >
                Submit
              </Button>
            ) : (
              <Spin />
            )}
          </Form.Item>
        </Form>
      ) : (
        <PostResult
          result='success'
          title='Successfully created a new List!'
          subTitle='Add another game or return to the Home page!'
          success={() => setSuccess(false)}
        />
      )}
    </section>
  );
};

export default CreateForm;
