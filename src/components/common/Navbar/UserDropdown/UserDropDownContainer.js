import { connect } from 'react-redux';

import { signOut } from '../../../../redux/actions/auth/authActionCreators';
import UserDropdown from './UserDropdown';


const mapDispatchToProps = { signOut };

export default connect(null, mapDispatchToProps)(UserDropdown);
