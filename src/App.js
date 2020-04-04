import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AccountPage from "./components/AcountPage/AccountPage";
import AdminPage from "./components/AdminPage/AdminPage";
import * as ROUTES from "./constants/routes";
import MainPageContainer from "./components/common/MainPage/MainPageContainer.js";
import "./App.css";
import { setUserSignedInSuccess } from "./redux/actions/auth/authActions";
import NavbarContainer from "./components/common/Navbar/NavbarContainer";
import AboutPage from "./components/common/Navbar/AboutPage/AboutPage";
import PortfoliosPageContainer from "./components/user/PortfoliosPage/PortfoliosPageContainer";

function App(props) {
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    props.signIn(uid);
  }, []);

  return (
    <Router>
      {" "}
      <div className="App">
        <NavbarContainer />
        <hr />
        <Route exact path={ROUTES.LANDING} component={MainPageContainer} />
        <Route path={ROUTES.PORTFOLIOS} component={PortfoliosPageContainer} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        {/* <Route path={ROUTES.BLOG} component={MainBlogPageContainer} /> */}
        <Route path={ROUTES.ABOUT} component={AboutPage} />

        {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (uid) => dispatch(setUserSignedInSuccess(uid)),
  };
};

export default connect(null, mapDispatchToProps)(App);

// export default App;
