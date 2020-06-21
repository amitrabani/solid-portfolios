import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { LANDING } from '../../../constants/routes';
import {
  BaseContainer, ButtonsContainer, Form, FormGroup, Header,
} from '../../../elements/FormStyles';
import CircularProgress from '../../common/CircularProgress/CircularProgress';

const SignInForm = (props) => {
  const { signIn, signUpWithGoogle, auth } = props;
  const [redirectHome, setRedirectHome] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(email, password);
    setRedirectHome(true);
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    signUpWithGoogle();
    setRedirectHome(true);
  };

  const isInvalid = password === '' || email === '';
  let error = auth.authError;

  // firestore return bad error messages,
  // need to create a user-customized error messages util
  if (error === "Cannot read property 'uid' of null") {
    error = 'General Error';
  }

  return (
    <>
      {redirectHome && <Redirect to={LANDING} />}
      {auth.isAuthenticating ? (
        <CircularProgress />
      ) : (
        <BaseContainer style={{ height: '30em' }}>
          <Form onSubmit={handleSubmit}>
            <Header>Sign In</Header>
            <ButtonsContainer>
              <button type="button" onClick={handleGoogleLogin}>
                Sign In with Google
              </button>
            </ButtonsContainer>
            <FormGroup>
              <label htmlFor="Email">Email</label>
              <input
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Password">Password</label>
              <input
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </FormGroup>
            <ButtonsContainer>
              <button
                style={{ fontSize: '1.2rem' }}
                disabled={isInvalid}
                onClick={handleSubmit}
                type="submit"
              >
                Sign In
              </button>
            </ButtonsContainer>
          </Form>
          <div>
            {error && (
              <>
                <h3>Login Failed</h3>
                <h5 style={{ color: 'red' }}>{error}</h5>
              </>
            )}
          </div>
        </BaseContainer>
      )}
    </>
  );
};

SignInForm.propTypes = {
  auth: PropTypes.shape({
    authError: PropTypes.string,
    isAuthenticating: PropTypes.bool,
  }),
  signIn: PropTypes.func.isRequired,
  signUpWithGoogle: PropTypes.func.isRequired,
};

export default SignInForm;
