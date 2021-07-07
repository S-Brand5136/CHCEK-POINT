import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
        tags.map((item) => (
          <Link to='/browse' params={{ tag: item.tag_name }}>
            <Button type='primary' size='large'>
              {item.tag_name}
            </Button>
          </Link>
        ))}
    </aside>
  );
};

export default TagsAside;
