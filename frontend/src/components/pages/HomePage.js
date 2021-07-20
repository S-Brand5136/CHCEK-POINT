import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { Layout } from 'antd';

// components
import VisitorHero from '../partials/HomePage/VisitorHero';
import UserHero from '../partials/HomePage/UserHero';
import BrowseSection from '../partials/HomePage/BrowseSection';

const HomePage = () => {
  const { user, userLists, userCollection } = useContext(authContext);

  return (
    <Layout className='background-container' style={{ paddingBottom: '5rem' }}>
      <Layout.Content style={{ padding: '0 50px' }}>
        <div className='hero-section'>
          {!user ? (
            <>
              <VisitorHero />
              <BrowseSection />
            </>
          ) : (
            <UserHero
              user={user}
              lists={userLists}
              collections={userCollection}
            />
          )}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
