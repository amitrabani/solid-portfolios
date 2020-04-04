import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: solid black;
  z-index: 1;
  background: white;
  height: 70%;
  width: 50%;
  /* min-width */
  form {
    display: flex;
    flex-direction: column;
  }
  div {
    display: flex;
    position: relative;
  }
  input {
    font-size: 14px;
    font-size: 0.82353rem;
    height: 35px;
    height: 2.05882rem;
    margin: 0;
    padding: 0;
  }
  label {
    cursor: pointer;
    display: block;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.4;
  }
`;
