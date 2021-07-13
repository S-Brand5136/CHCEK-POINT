import React from 'react';

import { Modal } from 'antd';

const DeleteModal = ({
  title,
  description,
  userAnswer,
  visible,
  setVisible,
}) => {
  const clickHandler = (answer) => {
    userAnswer(answer);
    setVisible();
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => clickHandler(true)}
      onCancel={() => clickHandler(false)}
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>{description}</h2>
      </div>
    </Modal>
  );
};

export default DeleteModal;
