import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  ABOUT, BLOG, LANDING, PORTFOLIOS,
} from '../../../constants/routes';
import useComponentVisible from '../../../hooks/useComponentVisable';
import useWideMode from '../../../hooks/useWideMode';
import Login from '../Login/Login';
import {
  AppHeader, Container, LinksContainer, List, SettingsButton,
} from './NavbarStyles';
import UserDropDownContainer from './UserDropdown/UserDropDownContainer';


const Navbar = (props) => {
  const { auth } = props;
  const isWideMode = useWideMode();
  const { isComponentVisible, setIsComponentVisible } = useComponentVisible(
    true,
  );

  useEffect(() => {
    if (!isWideMode) {
      setIsComponentVisible(true);
    }
  }, [isWideMode]);

  const toggleOpen = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <Container>
      {!isWideMode && (
        <div style={{ position: 'relative', width: '100%', height: '6rem' }}>
          <SettingsButton onClick={toggleOpen}>open</SettingsButton>
        </div>
      )}
      {' '}
      {isComponentVisible && (
        <>
          <Link
            className="removable"
            style={{ textDecoration: 'none ' }}
            to={LANDING}
          >
            <AppHeader>
              <h1>Solid Portfolios</h1>
              <h3>Worldly Wisdom and Intelligent Investing</h3>
            </AppHeader>
          </Link>
          <div className="navItem">
            <LinksContainer>
              <List>
                {auth.uid && (
                  <li>
                    <Link to={PORTFOLIOS}>Portfolios </Link>
                  </li>
                )}
                <li>
                  <Link to={BLOG}>Blog </Link>
                </li>
                <li>
                  <Link to={ABOUT}>About</Link>
                </li>
              </List>
              {!auth.uid ? (
                <Login />
              ) : (
                <span className="removable">
                  <UserDropDownContainer />
                </span>
              )}
            </LinksContainer>
          </div>
        </>
      )}
    </Container>
  );
};

Navbar.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string,
  }),
};
export default Navbar;
