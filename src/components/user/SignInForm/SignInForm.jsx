import React, { Component } from "react";
// import SignInGoogleButtonContainer from "../SignInGoogle/SignInGoogleButtonContainer";
// import { signIn } from "../../redux/actions/auth/authActions";
// import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.signIn(email, password);
    //conditional auth error
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const { authError } = this.props;

    const isInvalid = password === "" || email === "";
    return (
      <>
        {/* const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";
const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`; */}
        {/* const { signUpWithGoogle } = props; */}
        {/* // const {error} = this.state; */}
        <form onSubmit={this.onSubmit}>
          {/* <button onClick={onSubmitGoogle} disabled={isInvalid} type="submit">
          SignInGoogle
        </button> */}
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
          {error && <p>{error.message}</p>}
          {/* fix auth error not displayed */}
          {authError ? <h1>login failed</h1> : <h1>login success</h1>}
        </form>
      </>
    );
  }
}
export default SignInForm;
