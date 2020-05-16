import { connect } from 'react-redux';

import App from './App';
import { setUserSignedInSuccess } from './redux/actions/auth/authActions';
import { fetchPortfolios } from './redux/actions/portfolios/portfoliosActionCreators';
import { getAuth } from './redux/selectors';


const mapDispatchToProps = (dispatch) => ({
  signIn: (uid) => dispatch(setUserSignedInSuccess(uid)),
  fetchPortfolios,
});

const mapStateToProps = (state) => ({
  auth: getAuth(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
