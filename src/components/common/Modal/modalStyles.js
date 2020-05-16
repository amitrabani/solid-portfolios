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
    div #modalContainer :first-of-type {
      display: flex;
      flex-wrap: inherit;
      flex-direction: column;
      text-align: center;
    }
    #content {
  display:grid;
    }
    #modalContainer{flex-wrap:wrap-reverse};

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
`;
