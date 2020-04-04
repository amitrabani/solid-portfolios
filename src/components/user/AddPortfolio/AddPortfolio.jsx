import React from "react";
import {
  Container,
  StyledLogo,
  IconContainer,
  Button
} from "./addPortfolio.js";

const AddPortfolioButton = () => (
  <Container>
    <IconContainer>
      <StyledLogo />
    </IconContainer>
    <Button>Add portfolio</Button>
  </Container>
);

export default AddPortfolioButton;
