import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { Image } from 'antd';

export default function Title() {
  return (
    <div className='title'>
      <h1>
        <a href='/' className='title-link'>
          <Image height={100} width={100} preview={false} src={logo} />
          CHECK-POINT
        </a>
      </h1>
    </div>
  );
}
