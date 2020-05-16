import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';

import SnackbarElement from './snackbarStyles';


const Snackbar = (props) => {
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
      {props.message}
    </SnackbarElement>,
    document.body,
  );
};

export default Snackbar;
