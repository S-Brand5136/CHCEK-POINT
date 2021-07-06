import { useEffect, useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { Layout } from 'antd';

// components
import VisitorHero from '../partials/HomePage/VisitorHero';
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
          <VisitorHero />
          <BrowseSection />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
