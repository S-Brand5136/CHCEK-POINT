import TaggedGames from './TaggedGames';

const ListRow = ({ list }) => {
  return (
    <div>
      {list && (
        <TaggedGames games={list.splice(3)} tag={list[0]} showAdd={true} />
      )}
    </div>
  );
};

export default ListRow;
