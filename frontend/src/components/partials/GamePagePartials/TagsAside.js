import React from 'react';

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
          <Button className='tag-button' type='round' size='large'>
            {item.tag_name}
          </Button>
        ))}
    </aside>
  );
};

export default TagsAside;
