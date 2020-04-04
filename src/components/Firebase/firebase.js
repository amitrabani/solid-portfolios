import firebaseApp from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import config from "./config";

// class Firebase {
//   constructor() {
firebaseApp.initializeApp(config);

/* Helper */

const serverValue = firebaseApp.database.ServerValue;
const emailAuthProvider = firebaseApp.auth.EmailAuthProvider;

/* Firebase APIs */

// firebaseApp.onAuthStateChanged()

const auth = firebaseApp.auth();
const db = firebaseApp.database();

/* Social Sign In Method Provider */

export const googleProvider = new firebaseApp.auth.GoogleAuthProvider();
const facebookProvider = new firebaseApp.auth.FacebookAuthProvider();
const twitterProvider = new firebaseApp.auth.TwitterAuthProvider();
// }


// doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
// doSendEmailVerification = () =>
//   this.auth.currentUser.sendEmailVerification({
//     url: `http://localhost:3000`
//     //       //  process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT    });
//   });
// doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);


export const onAuthUserListener = () =>
  this.auth.onAuthStateChanged(authUser => {
    console.log("s nknjk")
    if (authUser) {
      this.user(authUser.uid)
        .once("value")
        .then(snapshot => {
          const dbUser = snapshot.val();

          // default empty roles
          if (!dbUser.roles) {
            dbUser.roles = [];
          }

          // merge auth and db user
       

          // next(authUser);
        });
    } else {
      // fallback();
    }
  });

// *** User API ***

const user = uid => this.db.ref(`users/${uid}`);

const users = () => this.db.ref("users");

// *** Message API ***

const message = uid => this.db.ref(`messages/${uid}`);

const messages = () => this.db.ref("messages");
// }
export const firestore = firebaseApp.firestore();
export default firebaseApp;
