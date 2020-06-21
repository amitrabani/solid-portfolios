import firebaseApp from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import config from './config';

firebaseApp.initializeApp(config);
const firestore = firebaseApp.firestore();
const googleProvider = new firebaseApp.auth.GoogleAuthProvider();

const getPortfoliosCollectionRef = (uid) => firestore.collection('users').doc(uid).collection('portfolios');

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    localStorage.setItem('uid', user.uid);
  } else {
    localStorage.removeItem('uid');
  }
});


export const getCurrentUser = () => firebaseApp.auth().currentUser;

export const signInWithFirebase = (email, password) => firebaseApp.auth()
  .signInWithEmailAndPassword(email, password);


export const signOutWithFirebase = () => firebaseApp.auth().signOut();
export const addGoogleUserToFirestore = () => firebaseApp

  .auth()
  .signInWithPopup(googleProvider)
  .then((socialAuthUser) => {
    const user = socialAuthUser.additionalUserInfo.profile;
    const { given_name, family_name } = user;
    firestore
      .collection('users')
      .doc(socialAuthUser.user.uid)
      .set({
        firstName: given_name,
        lastName: family_name,
        initials: given_name[0] + family_name[0],
        subscription: false,
      });
  })
  .catch((error) => error);

export const addUserToFirestore = (newUser) => {
  const {
    email, passwordOne, firstName, lastName,
  } = newUser;
  return firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, passwordOne)
    .then((resp) => firestore
      .collection('users')
      .doc(resp.user.uid)
      .set({
        firstName,
        lastName,
        initials: firstName[0] + lastName[0],
        subscription: false,
      }))
    .catch((error) => error);
};

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

export const addPortfolioToFirestore = async (uid, portfolio) => {
  const portfolios = getPortfoliosCollectionRef(uid);
  return portfolios
    .doc(portfolio.name)
    .set(portfolio, { merge: true })
    .catch(() => {
      throw new Error('Internal System Error');
    });
};

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

export const addSymbolToFirestorePortfolio = (uid, portfolioName, quote) => {
  const portfolios = getPortfoliosCollectionRef(uid);
  return portfolios
    .doc(portfolioName)
    .update({
      stocks: firebaseApp.firestore.FieldValue.arrayUnion(quote),
    })
    .catch((error) => error);
};
export const deleteSymbolsFromFirestorePortfolio = (
  uid,
  portfolioName,
  symbolsToDelete,
  oldStocks,
) => {
  const newStocks = oldStocks.filter((stock) => !symbolsToDelete[stock.symbol]);
  const portfolios = getPortfoliosCollectionRef(uid);
  return portfolios
    .doc(portfolioName)
    .update({
      stocks: newStocks,
    })
    .catch((error) => error);
};

export const deletePortfolioFromFireStore = (uid, portfolioNameToDelete) => {
  const portfolios = getPortfoliosCollectionRef(uid);
  return portfolios
    .get()
    .then((res) => {
      res.forEach((element) => {
        if (portfolioNameToDelete === element.data().name) {
          element.ref.delete();
        }
      });
    })
    .catch((error) => error);
};
