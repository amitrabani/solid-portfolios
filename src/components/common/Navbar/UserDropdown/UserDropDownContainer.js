import { connect } from "react-redux";
// import Navbar from "./Navbar";

import { signOut } from "../../../../redux/actions/auth/authActionCreators";
import UserDropdown from "./UserDropdown";

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

function mapStateToProps(state) {
  console.log(state);
}

export default connect(null, mapDispatchToProps)(UserDropdown);
