import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const TagsAside = ({ tags }) => {
  return (
    <aside className='game-tags'>
      <h2>
        Tags <span className='divider'> |</span>
      </h2>
      <div></div>
      <div></div>
      {tags &&
        tags.map((item, index) => (
          <Link to={`/browse/${item.tag_name}`}>
            <Button
              key={index}
              className='tag-button'
              type='round'
              size='large'
            >
              {item.tag_name}
            </Button>
          </Link>
        ))}
    </aside>
  );
};

export default TagsAside;
