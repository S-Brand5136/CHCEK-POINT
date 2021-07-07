import { Row } from 'antd';
import TaggedGames from '../userPartials/TaggedGames';

const UserCollections = ({ collections }) => {
  return (
    <Row justify='center'>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Current.splice(1)}
            tag='Current'
            showAdd={true}
          />
        )}
      </div>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Backlog.splice(1)}
            tag='Backlog'
            showAdd={true}
          />
        )}
      </div>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Completed.splice(1)}
            tag='Completed'
            showAdd={true}
          />
        )}
      </div>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Dropped.splice(1)}
            tag='Dropped'
            showAdd={true}
          />
        )}
      </div>
    </Row>
  );
};

export default UserCollections;
