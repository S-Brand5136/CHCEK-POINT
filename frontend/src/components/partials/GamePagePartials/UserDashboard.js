import { Row, Col, Statistic, Card, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

const UserDashboard = ({ list, title }) => {
  return (
    <div className='user-dashboard'>
      <Row>
        <Typography.Title level={2}>
          {title ? title + ' User Statistics' : 'Game Statistics'}{' '}
          <span className='divider'> |</span>
        </Typography.Title>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title='Lists Featuring This Game '
              value={Math.random() * (50 - 1) + 25}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title='Times Dropped'
              value={Math.random() * (20 - 1) + 10}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix=''
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title='Times Completed'
              value={Math.random() * (40 - 1) + 15}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix=''
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title='Hours played'
              value={Math.random() * (500 - 1) + 250}
              precision={1}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix='/hrs'
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboard;
