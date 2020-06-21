import {
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
} from '../actionTypes';

export const setUserSignedInSuccess = (uid) => ({
  type: SIGNIN_SUCCESS,
  payload: uid,
});

export const setUserSignedUpSuccess = (uid) => ({
  type: SIGNUP_SUCCESS,
  payload: uid,
});
