import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 111;
  :not(Container) {
    background-color: #00000069;
  }
  @media (max-width: 768px) {
    div {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ModalContent = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 1px solid transparent;
  border-radius: 15px;
  z-index: 100;
  background: #bdbdbd;
  height: fit-content;
  width: fit-content;
  padding: 2.5em;
  div {
    /* display: flex; */
  }

  /* min-width */
  /* form {
    display: flex;
    flex-direction: column;
  } */
  /* label {
    cursor: pointer;
    display: block;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.4;
  }  */
`;
