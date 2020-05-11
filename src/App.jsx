import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainContainer from './AppStyles';
import AccountPage from './components/AcountPage/AccountPage';
import MainPageContainer from './components/common/MainPage/MainPageContainer';
import MarketSummarry from './components/common/MarketSummary/MarketSummary';
import AboutPage from './components/common/Navbar/AboutPage/AboutPage';
import NavbarContainer from './components/common/Navbar/NavbarContainer';
import PortfolioManagementContainer from './components/user/PortfolioManagement/PortfolioManagementContainer';
import PortfoliosPageContainer from './components/user/PortfoliosPage/PortfoliosPageContainer';
import PrivateRoute from './components/user/PrivateRoute';
import * as ROUTES from './constants/routes';


function App(props) {
  const { auth, signIn, fetchPortfoliosFromFirestore } = props;
  useEffect(() => {
    const uid = localStorage.getItem('uid');
    if (uid) {
      signIn(uid);
      fetchPortfoliosFromFirestore();
    }
  }, []);

  return (
    <Router>
      <header>
        <NavbarContainer />
        <MarketSummarry />
      </header>
      <MainContainer>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={MainPageContainer} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.BLOG}>
            <h1>Under Construction</h1>
          </Route>
          {auth.uid && (
            <PrivateRoute>
              <Route
                exact
                path={ROUTES.PORTFOLIOS}
                component={PortfoliosPageContainer}
              />

              <Route exact path={ROUTES.PORTFOLIO_MANAGEMENT}>
                <PortfolioManagementContainer />
              </Route>
            </PrivateRoute>
          )}
        </Switch>
      </MainContainer>
    </Router>
  );
}

App.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.any,
  }),
  fetchPortfoliosFromFirestore: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default App;
