import React from "react";
import { Container, List, Nav } from "./NavbarStyles";
import { PORTFOLIOS, BLOG, ABOUT } from "../../../constants/routes";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import UserDropDownContainer from "./UserDropdown/UserDropDownContainer";

const Navbar = (props) => {
  console.log(props);
  // const links = auth.loggedIn ? <h1>signout</h1>:<h1>Sign In</h1>;
  return (
    <Container>
      <div style={{ overflowY: "hidden", minWidth: "170px" }}>
        <h1>Solid Portfolios</h1>
        <h3>Worldly Wisdom and Intelligent Investing</h3>
      </div>
      <div className="navItem">
        <Nav>
          <List>
            <li>
              <Link to={PORTFOLIOS}>
                <a>Portfolios</a>
              </Link>
            </li>
            <li>
              <Link to={BLOG}>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link to={ABOUT}>
                <a>About</a>
              </Link>
            </li>
          </List>
          {!props.auth.uid ? <Login /> : <UserDropDownContainer />}
          <div style={{ color: "white" }}>{/* {links} */}</div>
        </Nav>
      </div>
    </Container>
  );
};
export default Navbar;
