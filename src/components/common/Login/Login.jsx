import React, { useState } from 'react';

import LoginManagement from '../../user/LoginManagement/LoginManagement';
import Modal from '../Modal/Modal';
import { Button } from './LoginStyles';

const Login = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button onClick={toggleModalOpen}>
        <div>Login</div>
      </Button>
      <div style={{ height: '70%', width: '50%' }}>
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            style={{ backgroundColor: '£fcc117e3' }}
            onClose={toggleModalOpen}
          >
            <LoginManagement />
          </Modal>
        )}
      </div>
    </>
  );
};
export default Login;
