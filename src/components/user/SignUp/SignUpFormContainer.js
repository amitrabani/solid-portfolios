import { connect } from 'react-redux';

import { signUp } from '../../../redux/actions/auth/authActionCreators';
import store from '../../../redux/store';
import SignUpForm from './SignUpForm';

const mapStateToProps = () => ({
  auth: store.getState().auth,
});

const mapDispatchToProps = { signUp };

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
