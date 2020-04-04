// import React, { Component } from "react";
// import { compose } from "recompose";
// import { withFirebase } from "../Firebase/context";
// import { signIn } from "../../redux/actions/authActions";

// const ERROR_CODE_ACCOUNT_EXISTS =
//   "auth/account-exists-with-different-credential";
// const ERROR_MSG_ACCOUNT_EXISTS = `
//   An account with an E-Mail address to
//   this social account already exists. Try to login from
//   this account instead and associate your social accounts on
//   your personal account page.
// `;

// const SignInGoogleButton = props => {
//   const handleSubmit = (event, props) => {
//     event.preventDefault();
//     signUpWithGoogle();
//   };
//   console.log(props);
//   const { signUpWithGoogle } = props;
//   return (
//     <button onClick={handleSubmit}>Sign In with Google</button>
//     // const { error } = this.state;
//   );
// };

// // const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogle);
// export default SignInGoogleButton;
