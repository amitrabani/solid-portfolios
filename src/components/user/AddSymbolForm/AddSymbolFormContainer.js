import { connect } from 'react-redux';

import { addSymbol, fetchPortfolios } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import store from '../../../redux/store';
import AddSymbolForm from './AddSymbolForm';

const mapStateToProps = () => {
  const { fetchingSymbolsError, isFetchingSymbols } = store.getState().portfolios;
  return {
    fetchError: fetchingSymbolsError,
    isFetching: isFetchingSymbols,
  };
};
const mapDispatchToProps = { addSymbol };
export default connect(mapStateToProps, mapDispatchToProps)(AddSymbolForm);
