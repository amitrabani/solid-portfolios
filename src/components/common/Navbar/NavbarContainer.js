import { connect } from "react-redux";
import Navbar from "./Navbar";

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, null)(Navbar);
