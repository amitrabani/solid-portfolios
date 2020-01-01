import { connect } from 'react-redux'
import MainPage from './MainPage.jsx'
import { fetchPortfolios } from '../../redux/actions/actionCreators'

const mapStateToProps = ({ data = {} }) => ({
    data
  });
  export default connect(
    mapStateToProps,
    {
      fetchPortfolios
    }
  )(MainPage);