import React, { useState, useEffect } from "react";
import LeftArrow from "../../../../icons/LeftArrow";
import PropTypes from "prop-types";
import Theme from "../../../../elements/Theme";
import { Link } from "react-router-dom";
import { ACCOUNT } from "../../../../constants/routes";
import useComponentVisible from "../../../../hooks/useComponentVisable";
import { Container, List, Button } from "./userDropDownStyle";

const UserDropdown = (props) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
    // setIsComponentVisible(true);
  };

  const handleSignOut = () => {
    console.log(props);
    props.signOut();
  };
  useEffect(() => {
    setIsComponentVisible(isOpen);
  }, [isOpen]);

  return (
    <Container>
      <Button type="submit" onClick={toggleOpen}>
        <LeftArrow width="50" height="50" color={Theme.primaryColor} />
      </Button>

      {isComponentVisible && (
        <List ref={ref}>
          <li>
            {/* Account */}
            <Link to={ACCOUNT}>account</Link>
          </li>
          <li>Write an Article</li>
          <li onClick={handleSignOut}>
            <a>Sign Out </a>
          </li>
        </List>
      )}
    </Container>
  );
};

export default UserDropdown;

UserDropdown.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};
