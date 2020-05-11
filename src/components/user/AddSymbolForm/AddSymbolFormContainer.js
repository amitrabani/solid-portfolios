import { connect } from 'react-redux';

import { addSymbol } from '../../../redux/actions/portfolios/portfoliosActionCreators';
import { getPortfolios } from '../../../redux/selectors';
import AddSymbolForm from './AddSymbolForm';

const mapStateToProps = (state) => {
  const { fetchingSymbolsError, isFetchingSymbols } = getPortfolios(state);
  return {
    fetchError: fetchingSymbolsError,
    isFetching: isFetchingSymbols,
  };
};
const mapDispatchToProps = { addSymbol };
export default connect(mapStateToProps, mapDispatchToProps)(AddSymbolForm);
