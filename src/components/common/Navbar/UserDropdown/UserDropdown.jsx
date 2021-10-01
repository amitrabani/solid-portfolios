import React from 'react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {ACCOUNT, LANDING} from '../../../../constants/routes';
import useComponentVisible from '../../../../hooks/useComponentVisable';
import userIcon from '../../../../icons/userIcon.svg';
import {Button, Container, List} from './userDropDownStyle';
import {signOut} from '../../../../redux/actions/auth/authActionCreators';

import {useDispatch} from "react-redux";


const UserDropdown = () => {
    const dispatch = useDispatch()

    const {
        ref,
        isComponentVisible,
        setIsComponentVisible,
    } = useComponentVisible(false);

    const toggleOpen = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    const handleSignOut = () => {
        dispatch(signOut());
    };


    return (
        <Container>
            <Button type="submit" onClick={toggleOpen}>
                <img alt="user" src={userIcon}/>
            </Button>

            {isComponentVisible && (
                <List ref={ref}>
                    <li>
                        <Link
                            onClick={() => setIsComponentVisible(false)}
                            className="link"
                            to={ACCOUNT}
                        >
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setIsComponentVisible(false)}
                            className="link"
                            to={ACCOUNT}
                        >
                            Write an Article
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleSignOut} className="link" to={LANDING}>
                            Sign Out
                        </Link>
                    </li>
                </List>
            )}
        </Container>
    );
};

UserDropdown.propTypes = {
    signOut: PropTypes.func.isRequired,
};

export default UserDropdown;
