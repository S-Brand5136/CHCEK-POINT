import ListCards from './ListCards';

import { Row } from 'antd';

const ListRow = ({ list, reload }) => {
  return (
    <div>
      <Row gutter='20'>
        {list.length && (
          <ListCards
            games={list.splice(3)}
            tag={list[0]}
            reload={reload}
            showAdd={true}
          />
        )}
      </Row>
    </div>
  );
};

export default ListRow;
