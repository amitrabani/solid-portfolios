import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { LANDING } from '../../../constants/routes';
import {
  BaseContainer, ButtonsContainer, Form, FormGroup, Header,
} from '../../../elements/FormStyles';
import CircularProgress from '../../common/CircularProgress/CircularProgress';


const SignUpForm = (props) => {
  const { auth, signUp } = props;
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [redirectHome, setRedirectHome] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    const newUser = {
      username,
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
    };
    signUp(newUser);
    setRedirectHome(true);
  };

  const isInvalid = passwordOne !== passwordTwo
    || passwordOne === ''
    || email === ''
    || username === '';

  let error = auth.authError;
  if (error === 'Cannot read property \'uid\' of null') {
    error = 'Network Connection Error';
  }

  return (
    <>
      {redirectHome && <Redirect to={LANDING} />}
      {auth.isAuthenticating ? (
        <CircularProgress />
      ) : (
        <BaseContainer>
          <Form onSubmit={handleSignup}>
            <Header>Sign Up</Header>
            <FormGroup>
              <label>First Name</label>
              <input
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                type="text"
                placeholder="First Name"
              />
              {' '}
            </FormGroup>
            <FormGroup>
              <label htmlFor="Last Name">Last Name</label>
              <input
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Display Name">Display Name</label>
              <input
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                placeholder="Display Username"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Enter Password">Password</label>
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={(event) => setPasswordOne(event.target.value)}
                type="password"
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="Verify Password">Verify Password</label>
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={(event) => setPasswordTwo(event.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
            </FormGroup>
            <ButtonsContainer>
              <button
                disabled={isInvalid}
                onSubmit={handleSignup}
                type="submit"
              >
                Sign Up
              </button>
            </ButtonsContainer>
            {error && (
              <>
                <h3>Login Failed</h3>
                <p style={{ color: 'red ' }}>{error}</p>
              </>
            )}
          </Form>
        </BaseContainer>
      )}
    </>
  );
};

SignUpForm.propTypes = {
  auth: PropTypes.shape({
    authError: PropTypes.string || PropTypes.bool,
    isAuthenticating: PropTypes.bool,
  }),
  signUp: PropTypes.func.isRequired,
};

export default SignUpForm;