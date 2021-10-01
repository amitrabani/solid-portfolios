import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {LANDING} from '../../../constants/routes';
import {BaseContainer, ButtonsContainer, Form, FormGroup, Header,} from '../../../elements/FormStyles';
import {containIlegalCharacters} from '../../../utils/common';
import CircularProgress from '../../common/CircularProgress/CircularProgress';
import {signUp} from "../../../redux/actions/auth/authActionCreators";
import {useDispatch, useSelector} from "react-redux";

const SignUpForm = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [redirectHome, setRedirectHome] = useState(false);
    const [isLegalInput, setIsLegalInput] = useState(false);


    useEffect(() => {
        if (containIlegalCharacters([username, firstName, lastName])) {
            setIsLegalInput(true);
        } else {
            setIsLegalInput(false);
        }
    }, [username, firstName, lastName]);

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
        dispatch(signUp(newUser));
        setRedirectHome(true);
    };

    const isInvalid = isLegalInput || passwordOne !== passwordTwo
        || passwordOne === ''
        || email === ''
        || username === '';

    let error = auth.authError;
    if (error === 'Cannot read property \'uid\' of null') {
        error = 'Network Connection Error';
    }

    return (
        <>
            {redirectHome && <Redirect to={LANDING}/>}
            {auth.isAuthenticating ? (
                <CircularProgress/>
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
                                <h3>Sign Up Failed</h3>
                                <p style={{color: 'red '}}>{error}</p>
                            </>
                        )}
                    </Form>
                    <div>
                        {isLegalInput
                        && <p>Input should be between 2 to 15 charcters letters and numbers only!</p>}
                    </div>
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
