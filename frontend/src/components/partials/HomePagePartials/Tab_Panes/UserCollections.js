import { Row } from 'antd';
import ListCards from '../userPartials/ListCards';

const UserCollections = ({ collections, reload }) => {
  return (
    <div>
      <Row gutter='20'>
        {collections && (
          <ListCards
            games={collections.Current.splice(2)}
            tag='Current'
            showAdd={true}
            reload={reload}
          />
        )}
      </Row>
      <Row gutter='20'>
        {collections && (
          <ListCards
            games={collections.Backlog.splice(2)}
            tag='Backlog'
            showAdd={true}
            reload={reload}
          />
        )}
      </Row>
      <Row gutter='20'>
        {collections && (
          <ListCards
            games={collections.Completed.splice(2)}
            tag='Completed'
            showAdd={true}
            reload={reload}
          />
        )}
      </Row>
      <Row gutter='20' style={{ marginBottom: '2rem' }}>
        {collections && (
          <ListCards
            games={collections.Dropped.splice(2)}
            tag='Dropped'
            showAdd={true}
            reload={reload}
          />
        )}
        {console.log(collections)}
      </Row>
    </div>
  );
};

export default UserCollections;
