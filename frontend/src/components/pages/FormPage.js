import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

import AddForm from '../partials/ListPage/AddForm';
import logo from '../../img/mascot1.png';
import buttons from '../../img/button-faces.webp';

import { Typography } from 'antd';

const AddToListPage = () => {
  const { user, getUserDetails } = useContext(authContext);

  return (
    <main className='list-page'>
      <div className='container'>
        <div className='form-info'>
          <Typography.Title level={1}>
            Add to your Created Lists!
          </Typography.Title>
          <Typography.Title level={3}>
            CHECK-POINT supports any type of list you can think of!{' '}
          </Typography.Title>
          <img className='buttons-img' src={buttons} alt='' />
          <div className='form-mascot'>
            <img src={logo} alt='' />
          </div>
        </div>
        <AddForm userId={user && user.id} getDetails={getUserDetails} />
      </div>
    </main>
  );
};

export default AddToListPage;
