import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';
import { Image } from 'antd';

export default function Title() {
  return (
    <div className='title'>
      <h1>
        <Link to='/' className='title-link'>
          <Image height={100} width={100} preview={false} src={logo} />
          CHECK-POINT
        </Link>
      </h1>
    </div>
  );
}
