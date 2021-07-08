import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const TagsAside = ({ tags }) => {
  let history = useHistory();

  const clickHandler = (item) => {
    history.push(`/browse/${item.tag_name}`);
  };

  return (
    <aside className='game-tags'>
      <h2>
        Tags <span className='divider'> |</span>
      </h2>
      <div></div>
      <div></div>
      {tags &&
        tags.map((item, index) => (
          <Button
            key={index}
            className='tag-button'
            type='round'
            size='large'
            onClick={() => clickHandler(item)}
          >
            {item.tag_name}
          </Button>
        ))}
    </aside>
  );
};

export default TagsAside;
