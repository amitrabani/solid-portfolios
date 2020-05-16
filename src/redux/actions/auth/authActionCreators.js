import {
  addGoogleUserToFirestore,
  addUserToFirestore,
  getCurrentUser,
  signInWithFirebase,
  signOutWithFirebase,
} from '../../../firebase/firestoreDB';
import {
  SIGNIN_ERROR,
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS,
  START_AUTHENTICATION,
} from '../actionTypes';
import { setActionStatus, setError } from '../commonActions';
import { resetPortfolios } from '../portfolios/portfoliosActions';
import {
  setUserSignedInSuccess,
  setUserSignedUpSuccess,
} from './authActions';

export const signIn = (email, password) => (dispatch) => {
  dispatch(setActionStatus(START_AUTHENTICATION));
  signInWithFirebase(email, password)
    .then(() => dispatch(setUserSignedInSuccess(getCurrentUser().uid)))
    .catch((error) => {
      dispatch(setError(SIGNIN_ERROR, error.message));
    });
};

export const signOut = () => (dispatch) => {
  signOutWithFirebase()
    .then(() => localStorage.removeItem('uid'))
    .then(() => dispatch(setActionStatus(SIGNOUT_SUCCESS)))
    .then(() => {
      dispatch(resetPortfolios());
    })
    .catch(() => {
      // dispatch(setUserSignedOutError());
    });
};

export const signUpWithGoogle = () => (dispatch) => {
  dispatch(setActionStatus(START_AUTHENTICATION));
  addGoogleUserToFirestore()
    .then(() => {
      dispatch(setUserSignedUpSuccess(getCurrentUser().uid));
    })
    .catch((error) => {
      dispatch(setError(SIGNUP_ERROR, error.message));
    });
};

export const signUp = (newUser) => (dispatch) => {
  dispatch(setActionStatus(START_AUTHENTICATION));
  addUserToFirestore(newUser)
    .then(() => dispatch(setUserSignedUpSuccess(getCurrentUser().uid)))
    .catch((error) => {
      dispatch(setError(SIGNUP_ERROR, error.message));
    });
};
