import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import {signUp} from "../../../redux/actions/auth/authActionCreators"
const mapStateToProps = state => {
  return {
    auth: state.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
