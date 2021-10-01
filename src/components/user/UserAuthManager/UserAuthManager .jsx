import React, {useEffect, useState} from 'react';

import {useHistory} from 'react-router-dom';

import {LANDING} from '../../../constants/routes';
import SignInFormContainer from '../SignInForm/SignInFormContainer';
import SignUpForm from '../SignUp/SignUpForm';
import {Container, FormChanger, Login} from './userAuthManagerStyles';

const RENDER_SIGNIN = 'signIn';
const RENDER_SIGNUP = 'signUp';

const UserAuthManager = () => {
    const [renderedForm, setRenderedForm] = useState(RENDER_SIGNIN);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const history = useHistory();

    useEffect(() => () => {
        setShouldRedirect(true);
    }, []);


    // const RENDER_FORGOT = "forgotPassword";

    const switchForm = () => (renderedForm === RENDER_SIGNIN
        ? setRenderedForm(RENDER_SIGNUP)
        : setRenderedForm(RENDER_SIGNIN));

    if (shouldRedirect) {
        return history.push(LANDING);
    }
    return (
        <Container>
            <Login>
                <div className="container">
                    {renderedForm === RENDER_SIGNIN && (
                        <SignInFormContainer/>
                    )}
                    {renderedForm === RENDER_SIGNUP && (
                        <SignUpForm/>
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
        </Container>
    );
};

export default UserAuthManager;
