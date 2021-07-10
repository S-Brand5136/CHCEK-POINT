import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

import CreateForm from '../partials/ListPagePartials/CreateForm';
import logo from '../../img/mascot1.png';
import buttons from '../../img/button-faces.webp';

import { Typography } from 'antd';

const CreateListPage = () => {
  const { user, getUserDetails } = useContext(authContext);

  return (
    <main className='list-page'>
      <div className='container'>
        <div className='form-info'>
          <Typography.Title level={1}>Create a new List!</Typography.Title>
          <Typography.Title level={3}>
            CHECK-POINT supports any type of list you can think of!{' '}
          </Typography.Title>
          <img className='buttons-img' src={buttons} alt='' />
          <div className='form-mascot'>
            <img src={logo} alt='' />
          </div>
        </div>
        <CreateForm userId={user && user.id} getDetails={getUserDetails} />
      </div>
    </main>
  );
};

export default CreateListPage;
