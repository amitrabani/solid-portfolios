import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import useComponentVisible from '../../../hooks/useComponentVisable';
import { ModalContainer, ModalContent } from './modalStyles';


const Modal = (props) => {
  const { onClose, children } = props;
  const { ref, isComponentVisible } = useComponentVisible(true);

  useEffect(() => () => {
    onClose();
  }, [isComponentVisible]);

  return (
    isComponentVisible && (
      <ModalContainer id="modalContainer">
        {' '}
        <ModalContent id="content" ref={ref}>
          {children}
        </ModalContent>
      </ModalContainer>
    )
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
