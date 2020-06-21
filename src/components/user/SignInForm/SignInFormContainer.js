import { connect } from 'react-redux';

import {
  signIn,
  signUpWithGoogle,
} from '../../../redux/actions/auth/authActionCreators';
import store from '../../../redux/store';
import SignInForm from './SignInForm';

const mapStateToProps = () => ({
  auth: store.getState().auth,
});

const mapDispatchToProps = { signIn, signUpWithGoogle };

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
