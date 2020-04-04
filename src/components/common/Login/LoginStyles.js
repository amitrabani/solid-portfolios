import styled from "styled-components";
import Theme from "../../../elements/Theme";

export const Container = styled.div`
  justify-content: flex-end;
  display: flex;
  margin: auto 5em;
`;

export const Button = styled.div`
  margin: auto 5em;
  color: ${Theme.primaryColor};
  padding: 0 0.5em;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  border: 1px solid ${Theme.primaryColor};
  border-radius:7px;
  :hover {
    color: white;
    background-color: ${Theme.primaryColor};
  }
`;
