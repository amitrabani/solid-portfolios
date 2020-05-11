// import firebaseApp, { googleProvider } from "./firebase";
import firebaseApp from '../../node_modules/firebase/app';
import '../../node_modules/firebase/auth';
import '../../node_modules/firebase/firestore';
import config from './config';

firebaseApp.initializeApp(config);
const firestore = firebaseApp.firestore(); // delete line in firebase file
const googleProvider = new firebaseApp.auth.GoogleAuthProvider();

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    localStorage.setItem('uid', user.uid);
  } else {
    localStorage.removeItem('uid');
  }
});
const getPortfoliosCollectionRef = (uid) => firestore.collection('users').doc(uid).collection('portfolios');

export const getCurrentUser = () => firebaseApp.auth().currentUser;

const handleDocChanges = (querySnapshot, oldPortfolios) => {
  const portfolios = oldPortfolios;
  const changes = querySnapshot.docChanges();
  changes.forEach((change) => {
    if (change.type === 'added') {
      portfolios.push(change.doc.data());
    } else if (change.type === 'modified') {
      const modifiedPortfolio = change.doc.data();
      const pos = portfolios.findIndex(
        (portfolio) => portfolio.name === modifiedPortfolio.name,
      );
      if (pos !== -1) {
        portfolios.splice(pos, 1, modifiedPortfolio);
      } else {
        portfolios.push(modifiedPortfolio);
      }
    } else if (change.type === 'removed') {
      portfolios.splice(change.oldIndex, 1);
    }
  });
  return portfolios;
};

export const signInWithFirebase = (email, password) => firebaseApp.auth()
  .signInWithEmailAndPassword(email, password);


export const signOutWithFirebase = () => firebaseApp.auth().signOut();
export const addGoogleUserToFirestore = () => firebaseApp
  .auth()
  .signInWithPopup(googleProvider)
  .then((socialAuthUser) => {
    const user = socialAuthUser.additionalUserInfo.profile;
    firestore
      .collection('users')
      .doc(socialAuthUser.user.uid)
      .set({
        firstName: user.given_name,
        lastName: user.family_name,
        initials: user.given_name[0] + user.family_name[0],
        subscription: false,
      });
  })
  .catch((error) => error);
export const addUserToFirestore = (newUser) => firebaseApp
  .auth()
  .createUserWithEmailAndPassword(newUser.email, newUser.passwordOne)
  .then((resp) => firestore
    .collection('users')
    .doc(resp.user.uid)
    .set({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      initials: newUser.firstName[0] + newUser.lastName[0],
      subscription: false,
    }))
  .catch((error) => error);

export const addPortfolioToFirestore = async (uid, portfolio) => firestore
  .collection('users')
  .doc(uid)
  .collection('portfolios')
  .doc(portfolio.name)
  .set(portfolio, { merge: true })
  .catch(() => {
    throw new Error('Internal System Error');
  });

export const getPortfoliosFromFirestore = (
  uid,
  oldPortfolios,
  successCallback,
  failedCallback,
) => {
  const portfoliosRef = getPortfoliosCollectionRef(uid);
  return portfoliosRef.onSnapshot(
    (querySnapshot) => {
      const portfolios = handleDocChanges(querySnapshot, oldPortfolios);
      successCallback(portfolios);
      return true;
    },
    (error) => {
      failedCallback(error);
      return error;
    },
  );
};

// block duplicates
export const addSymbolToFirestorePortfolio = (uid, portfolioName, quote) => firestore.collection('users').doc(uid)
  .collection('portfolios')
  .doc(portfolioName)
  .update({
    stocks: firebaseApp.firestore.FieldValue.arrayUnion(quote),
  })
  .catch((error) => error);

export const deleteSymbolsFromFirestorePortfolio = (
  uid,
  portfolioName,
  symbolsToDelete,
  oldStocks,
) => {
  const newStocks = oldStocks.filter((stock) => !symbolsToDelete[stock.symbol]);
  return firestore
    .collection('users')
    .doc(uid)
    .collection('portfolios')
    .doc(portfolioName)
    .update({
      stocks: newStocks,
    })
    .catch((error) => error);
};
export const deletePortfolioFromFireStore = (uid, portfolioNameToDelete) => firestore
  .collection('users')
  .doc(uid)
  .collection('portfolios')
  .get()
  .then((res) => {
    res.forEach((element) => {
      if (portfolioNameToDelete === element.data().name) {
        element.ref.delete();
      }
    });
  })
  .catch((error) => error);
