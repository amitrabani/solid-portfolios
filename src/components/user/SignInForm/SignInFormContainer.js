import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signUpWithGoogle } from "../../../redux/actions/auth/authActionCreators";
import SignInForm from "./SignInForm";

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebaseReducer.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    signInGoogle: () => dispatch(signUpWithGoogle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
