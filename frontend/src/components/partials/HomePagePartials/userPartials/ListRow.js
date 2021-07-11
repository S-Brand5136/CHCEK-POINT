import TaggedGames from './TaggedGames';

const ListRow = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.length && (
        <TaggedGames games={list.splice(3)} tag={list[0]} showAdd={true} />
      )}
    </div>
  );
};

export default ListRow;
