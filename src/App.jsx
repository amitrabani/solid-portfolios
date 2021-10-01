import React, {useEffect} from 'react';

import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MainContainer from './AppStyles';
import MainPage from './components/common/MainPage/MainPage';
import MarketSummarry from './components/common/MarketSummary/MarketSummary';
import AboutPage from './components/common/Navbar/AboutPage/AboutPage';
import Navbar from './components/common/Navbar/Navbar';
import AccountPage from './components/user/AcountPage/AccountPage';
import PortfolioManagement from './components/user/PortfolioManagement/PortfolioManagement';
import PortfoliosPage from './components/user/PortfoliosPage/PortfoliosPage';
import PrivateRoute from './components/user/PrivateRoute';
import * as ROUTES from './constants/routes';
import {useDispatch, useSelector} from "react-redux";
import {setUserSignedInSuccess} from './redux/actions/auth/authActions';
import {fetchPortfolios} from './redux/actions/portfolios/portfoliosActionCreators';

function App() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const uid = localStorage.getItem('uid');


    useEffect(() => {
        if (!auth.uid) {
            dispatch(setUserSignedInSuccess(uid));
            dispatch(fetchPortfolios());
        }
    }, [auth.uid]);

    return (
        <Router>
            <header>
                <Navbar/>
                <MarketSummarry/>
            </header>
            <MainContainer>
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={MainPage}/>
                    <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                    <Route path={ROUTES.ABOUT} component={AboutPage}/>
                    <Route path={ROUTES.BLOG}>
                        <h1>Under Construction</h1>
                    </Route>
                    <PrivateRoute>
                        <Route
                            exact
                            path={ROUTES.PORTFOLIOS}
                            component={PortfoliosPage}
                        />

                        <Route exact path={ROUTES.PORTFOLIO_MANAGEMENT}>
                            <PortfolioManagement/>
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
