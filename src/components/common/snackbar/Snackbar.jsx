import React, {useEffect, useState} from 'react';

import ReactDOM from 'react-dom';

import SnackbarElement from './snackbarStyles';


const Snackbar = ({message}) => {
    const [isActive, setActive] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setActive(false);
        }, 3000);
    }, []);

    return ReactDOM.createPortal(
        <SnackbarElement
            show={isActive}
        >
            {message}
        </SnackbarElement>,
        document.body,
    );
};

export default Snackbar;
