import firebaseApp from "../../../components/Firebase/firebase";
import {
  firestore,
  googleProvider
} from "../../../components/Firebase/firebase";
import {
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  // SIGNOUT_ERROR,
  SIGNOUT_SUCCESS
} from "../actionTypes";

export const setUserSignedInSuccess = uid => ({
  type: SIGNIN_SUCCESS,
  payload: uid
});

export const setUserSignedInError = err => ({
  type: SIGNIN_ERROR,
  err
});

// export const setUserSignedOutError = () => ({
//   type: SIGNOUT_ERROR});

export const setUserSignedOutSuccess = () => ({
  type: SIGNOUT_SUCCESS
});

export const setUserSignedUpError = err => ({
  type: SIGNUP_ERROR,
  err
});

export const setUserSignedUpSuccess = uid => ({
  type: SIGNUP_SUCCESS,
  payload: uid
});
