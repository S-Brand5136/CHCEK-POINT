import { useEffect, useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { Layout } from 'antd';

// components
import VisitorHero from '../partials/HomePage/VisitorHero';
import UserHero from '../partials/HomePage/UserHero';
import BrowseSection from '../partials/HomePage/BrowseSection';

const HomePage = () => {
  const { user } = useContext(authContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Layout>
      <Layout.Content style={{ padding: '0 50px' }}>
        <div className='hero-section'>
          {!user ? <VisitorHero /> : <UserHero />}
          <BrowseSection />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
