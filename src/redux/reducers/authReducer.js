import {
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  START_AUTHENTICATION,
} from '../actions/actionTypes';

const initialState = {
  authError: null,
  loggedIn: false,
  uid: null,
  isAuthenticating: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_AUTHENTICATION:
      return { ...state, isAuthenticating: true };

    case SIGNIN_ERROR:
      return {
        ...state,
        authError: action.error,
        isAuthenticating: false,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        authError: null,
        loggedIn: true,
        uid: action.payload,
        isAuthenticating: false,
      };

    case SIGNOUT_SUCCESS:
      return {
        ...state,
        authError: null,
        loggedIn: false,
        uid: null,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
        loggedIn: true,
        uid: action.payload,
        isAuthenticating: false,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.error,
        isAuthenticating: false,
      };

    default:
      return state;
  }
};

export default authReducer;
