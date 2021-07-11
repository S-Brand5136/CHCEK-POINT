import TaggedGames from './TaggedGames';

import { Row } from 'antd';

const ListRow = ({ list }) => {
  console.log(list);
  return (
    <div>
      <Row gutter='20'>
        {list.length && (
          <TaggedGames games={list.splice(3)} tag={list[0]} showAdd={true} />
        )}
      </Row>
    </div>
  );
};

export default ListRow;
