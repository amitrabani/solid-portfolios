import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainContainer from './AppStyles';
import MainPage from './components/common/MainPage/MainPage';
import MarketSummarry from './components/common/MarketSummary/MarketSummary';
import AboutPage from './components/common/Navbar/AboutPage/AboutPage';
import NavbarContainer from './components/common/Navbar/NavbarContainer';
import PortfolioManagementContainer from './components/user/PortfolioManagement/PortfolioManagementContainer';
import PortfoliosPageContainer from './components/user/PortfoliosPage/PortfoliosPageContainer';
import PrivateRoute from './components/user/PrivateRoute';
import * as ROUTES from './constants/routes';
import AccountPage from './future-components/AcountPage/AccountPage';


function App(props) {
  const { auth, signIn, fetchPortfolios } = props;
  const uid = localStorage.getItem('uid');
  useEffect(() => {
    if (!auth.uid) {
      signIn(uid);
      fetchPortfolios();
    }
  }, [auth.uid]);

  return (
    <Router>
      <header>
        <NavbarContainer />
        <MarketSummarry />
      </header>
      <MainContainer>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={MainPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.BLOG}>
            <h1>Under Construction</h1>
          </Route>
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
        </Switch>
      </MainContainer>
    </Router>
  );
}

App.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.any,
  }),
  fetchPortfolios: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default App;
