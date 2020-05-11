import { connect } from 'react-redux';

import {
  signIn,
  signUpWithGoogle,
} from '../../../redux/actions/auth/authActionCreators';
import { getAuth } from '../../../redux/selectors';
import SignInForm from './SignInForm';

const mapStateToProps = (state) => ({
  auth: getAuth(state),
});

const mapDispatchToProps = { signIn, signUpWithGoogle };

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
