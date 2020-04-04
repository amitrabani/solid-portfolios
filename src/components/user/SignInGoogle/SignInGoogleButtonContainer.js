import { connect } from "react-redux";
import { signUpWithGoogle } from "../../redux/actions/authActions";
import SignInGoogleButton from "./SignInGoogle";
import store from "../../redux/store";

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebaseReducer.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInGoogle: () => dispatch(signUpWithGoogle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInGoogleButton);
