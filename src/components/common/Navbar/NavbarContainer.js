import { connect } from 'react-redux';

import Navbar from './Navbar';

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, null)(Navbar);
