import React, { useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';

import SignInFormContainer from '../SignInForm/SignInFormContainer';
import SignUpFormContainer from '../SignUp/SignUpFormContainer';
import { FormChanger, Login } from './loginManagementStyles';


const LoginManagement = () => {
  const RENDER_SIGNIN = 'signIn';
  const RENDER_SIGNUP = 'signUp';
  const [renderedForm, setRenderedForm] = useState(RENDER_SIGNIN);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => () => {
    setShouldRedirect(true);
  }, []);


  // const RENDER_FORGOT = "forgotPassword";


  const switchForm = () => (renderedForm === RENDER_SIGNIN
    ? setRenderedForm(RENDER_SIGNUP)
    : setRenderedForm(RENDER_SIGNIN));

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{ width: '50em', display: 'flex', justifyContent: 'center' }}>
      <Login>
        <div className="container">
          {renderedForm === RENDER_SIGNIN && (
            <>
              <SignInFormContainer />
            </>
          )}
          {renderedForm === RENDER_SIGNUP && (
            <>
              <SignUpFormContainer />
            </>
          )}
        </div>

        <FormChanger onClick={switchForm} form={renderedForm}>
          <div className="inner-container">
            <div className="text">
              {renderedForm === RENDER_SIGNUP ? 'Sign In' : 'Sign Up'}
            </div>
          </div>
        </FormChanger>
      </Login>
    </div>
  );
};

export default LoginManagement;
