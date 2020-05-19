import { connect } from 'react-redux';

import { addSymbol, fetchPortfolios } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import store from '../../../redux/store';
import AddSymbolForm from './AddSymbolForm';

const mapStateToProps = () => {
  const { fetchingSymbolsError, isLoadingSymbols } = store.getState().portfolios;
  return {
    fetchError: fetchingSymbolsError,
    isLoading: isLoadingSymbols,
  };
};
const mapDispatchToProps = { addSymbol };
export default connect(mapStateToProps, mapDispatchToProps)(AddSymbolForm);
