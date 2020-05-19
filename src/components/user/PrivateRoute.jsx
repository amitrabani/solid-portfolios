import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import store from '../../redux/store';
import Modal from '../common/Modal/Modal';
import UserAuthManager from './UserAuthManager/UserAuthManager ';


const PrivateRoute = (props) => {
  const [isModalOpen, setModalOpen] = useState(true);
  const { auth, children } = props;

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };


  return auth.uid ? children
    : (
      <div style={{ height: '70%', width: '50%' }}>
        {isModalOpen && (
        <Modal
          open={isModalOpen}
          style={{ backgroundColor: '£fcc117e3' }}
          onClose={toggleModalOpen}
        >
          <UserAuthManager />
        </Modal>
        )}
      </div>
    );
};

PrivateRoute.propTypes = {
  uid: PropTypes.string,
};

const mapStateToProps = () => ({
  auth: store.getState().auth,
});

export default connect(mapStateToProps, null)(PrivateRoute);
