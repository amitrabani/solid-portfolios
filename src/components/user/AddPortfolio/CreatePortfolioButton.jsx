import React, { useState } from 'react';

import Modal from '../../common/Modal/Modal';
import {
  Button, Container, IconContainer, StyledLogo,
} from './createPortfolioButtonStyles';
import CreatePortfolioFormContainer from './CreatePortfolioFormContainer';


const CreatePortfolioButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Container>
        <IconContainer>
          <StyledLogo />
        </IconContainer>
        <Button onClick={toggleModalOpen}>Add portfolio</Button>
      </Container>
      {isModalOpen && (
        <Modal onClose={toggleModalOpen}>
          <CreatePortfolioFormContainer onClose={toggleModalOpen} />
        </Modal>
      )}
    </>
  );
};

export default CreatePortfolioButton;
