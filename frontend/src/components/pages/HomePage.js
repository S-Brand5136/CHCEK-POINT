import { useEffect, useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { Layout } from 'antd';

// components
import VisitorHero from '../partials/HomePagePartials/VisitorHero';
import UserHero from '../partials/HomePagePartials/UserHero';
import BrowseSection from '../partials/HomePagePartials/BrowseSection';

const HomePage = () => {
  const { user, userLists, userCollection } = useContext(authContext);

  return (
    <Layout style={{ paddingBottom: '5rem' }}>
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
