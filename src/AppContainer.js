import { connect } from 'react-redux';

import App from './App';
import { setUserSignedInSuccess } from './redux/actions/auth/authActions';
import { fetchPortfolios } from './redux/actions/portfolios/portfoliosActionCreators';
import store from './redux/store';


const mapDispatchToProps = (dispatch) => ({
  signIn: (uid) => dispatch(setUserSignedInSuccess(uid)),
  fetchPortfolios,
});

const mapStateToProps = () => ({
  auth: store.getState().auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
