import { Row } from 'antd';
import TaggedGames from '../userPartials/TaggedGames';

const UserCollections = ({ collections }) => {
  return (
    <div>
      <Row gutter='20'>
        {collections && (
          <TaggedGames
            games={collections.Current.splice(2)}
            tag='Current'
            showAdd={true}
          />
        )}
      </Row>
      <Row gutter='20'>
        {collections && (
          <TaggedGames
            games={collections.Backlog.splice(2)}
            tag='Backlog'
            showAdd={true}
          />
        )}
      </Row>
      <Row gutter='20'>
        {collections && (
          <TaggedGames
            games={collections.Completed.splice(2)}
            tag='Completed'
            showAdd={true}
          />
        )}
      </Row>
      <Row gutter='20' style={{ marginBottom: '2rem' }}>
        {collections && (
          <TaggedGames
            games={collections.Dropped.splice(2)}
            tag='Dropped'
            showAdd={true}
          />
        )}
      </Row>
    </div>
  );
};

export default UserCollections;
