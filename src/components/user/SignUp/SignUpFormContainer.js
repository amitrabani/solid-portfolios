import { connect } from 'react-redux';

import { signUp } from '../../../redux/actions/auth/authActionCreators';
import { getAuth } from '../../../redux/selectors';
import SignUpForm from './SignUpForm';

const mapStateToProps = (state) => ({
  auth: getAuth(state),
});

const mapDispatchToProps = { signUp };

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
