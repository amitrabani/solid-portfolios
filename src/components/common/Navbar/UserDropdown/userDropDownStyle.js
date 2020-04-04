import styled from "styled-components";
import Theme from "../../../../elements/Theme";

export const Container = styled.div`
  /* background-color:white  */
  width: 200px;
  h2 {
    font-family: ${Theme.fonts.primaryFontFamily};
    color: ${Theme.primaryColor};
  }
`;
export const List = styled.ul`
  padding: 7px;
  margin: 0;
  width: -webkit-fill-available;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 10px;
  background: transparent;
  appearance: none;
  cursor: pointer;
  list-style-type: none;

  li {
    background-color: #ffffff40;
    color: #fcc117e3;
    padding: 0.5em;
    font-weight: 800;
    :hover{
        background-color:#1f1b2429;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  outline-color: #03dac56b;
  outline-width: thick;
  border-radius: 139px;
  border: 3px solid #ffffff5c;
  opacity: 0.8;
  width: 70px;
  height: 70px;
  margin: 5px;
  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: transparent;
  }
`;
