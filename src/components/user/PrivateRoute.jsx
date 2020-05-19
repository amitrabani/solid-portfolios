import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAuth } from '../../redux/selectors';
import Modal from '../common/Modal/Modal';
import UserAuthManager from './UserAuthManager/UserAuthManager ';


const PrivateRoute = (props) => {
  const [isModalOpen, setModalOpen] = useState(true);
  const { uid, children } = props;

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };


  return uid ? children
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

const mapStateToProps = (state) => ({
  uid: getAuth(state).uid,
});

export default connect(mapStateToProps, null)(PrivateRoute);
