import {
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS
} from "../actions/actionTypes";

const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_ERROR:
      console.log("Sign In error");
      return {
        ...state,
        authError: `Sign In failed ${action.err}`
      };
    case SIGNIN_SUCCESS:
      console.log("Login Success");
      console.log(action);
      return {
        ...state,
        authError: null,
        loggedIn: true,
        uid: action.payload
      };

    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return { ...state, authError: null, loggedIn: false, uid: null };

    case SIGNUP_SUCCESS:
      console.log("Signup Success");

      return {
        ...state,
        authError: null,
        loggedIn: true,
        uid: action.payload
      };

    case SIGNUP_ERROR:
      console.log("signup error");
      return {
        ...state,
        authError: `Sign Up failed ${action.err}`
      };
    default:
      return state;
  }
};

export default authReducer;
