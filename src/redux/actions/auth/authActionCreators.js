import firebaseApp from "../../../components/Firebase/firebase";
import {
  firestore,
  googleProvider
} from "../../../components/Firebase/firebase";
// import {
//     SIGNIN_SUCCESS,
//     SIGNIN_ERROR,
//     SIGNUP_ERROR,
//     SIGNUP_SUCCESS,
//     SIGNOUT_ERROR,
//     SIGNOUT_SUCCESS
//   } from "../actionTypes";
import {
  setUserSignedInSuccess,
  setUserSignedInError,
  setUserSignedUpError,
  setUserSignedUpSuccess,
  setUserSignedOutError,
  setUserSignedOutSuccess
} from "../auth/authActions";

export const signIn = (email, password) => {
  return dispatch => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(dataBeforeEmail => {
        firebaseApp.auth().onAuthStateChanged(function(user) {
          localStorage.setItem("uid", user.uid);
          dispatch(setUserSignedInSuccess(user.uid));
        });
      })
      // .then(() => {
      //   firebaseApp.onAuthUserListener()
      // })
      .catch(err => {
        dispatch(setUserSignedInError(err));
      });
  };
};

// .catch(error => {
//   if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
//       error.message = ERROR_MSG_ACCOUNT_EXISTS;
//     }
//   this.setState({ error });
// });

export const signOut = () => async dispatch => {
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      firebaseApp.auth().onAuthStateChanged(function(user) {
        localStorage.removeItem("uid");
        dispatch(setUserSignedOutSuccess());
      });
    })
    .catch(() => {
      // dispatch(setUserSignedOutError());
    });
};

export const signUpWithGoogle = () => {
  return dispatch => {
    firebaseApp
      .auth()
      .signInWithPopup(googleProvider)
      .then(socialAuthUser => {
        const user = socialAuthUser.additionalUserInfo.profile;
        firestore
          .collection("users")
          .doc(socialAuthUser.user.uid)
          .set({
            firstName: user.given_name,
            lastName: user.family_name,
            initials: user.given_name[0] + user.family_name[0],
            subscription: false
          });
      })
      .then(data => {
        firebaseApp.auth().onAuthStateChanged(function(user) {
          console.log(user)
          localStorage.setItem("uid", user.uid);
          dispatch(setUserSignedUpSuccess(user.uid));
        });
      })
      .catch(err => {
        dispatch(setUserSignedUpError(err));
      });
  };
};

export const signUp = newUser => {
  return dispatch => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.passwordOne)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
            subscription: false
          });
      })
      .then(data => {
        firebaseApp.auth().onAuthStateChanged(function(user) {
          localStorage.setItem( "uid",user.uid);
          dispatch(setUserSignedUpSuccess(user.uid));
        });
      })
      .catch(err => {
        dispatch(setUserSignedUpError(err));
      });
  };
};
