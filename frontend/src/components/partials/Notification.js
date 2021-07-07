import { notification } from 'antd';

const Notification = ({ title, description, type }) => {
  notification[type]({
    message: title,
    description,
  });
};

export default Notification;
