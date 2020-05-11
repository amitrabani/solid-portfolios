import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getAuth } from '../../redux/selectors';

const PrivateRoute = (props) => {
  // eslint-disable-next-line react/prop-types
  const { uid, children } = props;
  return <>{uid ? children : <Redirect to="/" />}</>;
};

PrivateRoute.propTypes = {
  uid: PropTypes.string,
};

const mapStateToProps = (state) => ({
  uid: getAuth(state).uid,
});

export default connect(mapStateToProps, null)(PrivateRoute);
