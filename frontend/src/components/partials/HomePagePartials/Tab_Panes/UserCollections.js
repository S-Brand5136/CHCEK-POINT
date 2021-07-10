import { Row } from 'antd';
import TaggedGames from '../userPartials/TaggedGames';

const UserCollections = ({ collections }) => {
  console.log(collections);
  return (
    <Row justify='center'>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Current.splice(2)}
            tag='Current'
            showAdd={true}
          />
        )}
      </div>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Backlog.splice(2)}
            tag='Backlog'
            showAdd={true}
          />
        )}
      </div>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Completed.splice(2)}
            tag='Completed'
            showAdd={true}
          />
        )}
      </div>
      <div>
        {collections && (
          <TaggedGames
            games={collections.Dropped.splice(2)}
            tag='Dropped'
            showAdd={true}
          />
        )}
      </div>
    </Row>
  );
};

export default UserCollections;
