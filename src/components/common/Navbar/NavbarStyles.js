import styled from "styled-components";
import Theme from "../../../elements/Theme";

export const Nav = styled.div`
  display: flex;
  width:100%
`;

export const Container = styled.div`
  background-color: #d5d3cd3b;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  width: 100%;
  height: 15%;
  min-height: 108px;
  overflow: visible;
  h1 {
    color: white;
  }
  h3 {
    margin-left: 60px;
    color: white;
  }
  @media (max-width: 730px) {
    navItem {
      background: white;
      display: none;
    }
  }
`;
/* 
// @media (max-width: 768px) {
//   .App{
//     display: flex;
//     flex-direction: column;
// justify-content: center;
// /* align-items: center; */
/* //   } */
/* //   } */

export const List = styled.ul`
  display: flex;
  list-style: none;
  width: min-content;
  padding: 0;
  :hover li a {
    opacity: 0.5;
  }
  li a {
    padding: 0.5em;
    color: ${Theme.primaryColor};
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    :hover {
      opacity: 1;
      border-bottom: 3px solid white;
    }
  }
`;
