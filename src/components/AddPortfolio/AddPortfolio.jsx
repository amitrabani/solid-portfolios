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
      <StyledLogo width="10" height="10" />
    </IconContainer>
    <Button>Add portfolio</Button>
  </Container>
);

export default AddPortfolioButton;
