import React from "react";
import PropTypes from "prop-types";
import PortfolioChartContainer from "..//PortfolioChart/PortfolioChartContainer.jsx";
import RightArrow from "../../icons/RightArrow";
import LeftArrow from "../../icons/LeftArrow";
import Theme from "../../elements/Theme";
import {
  Container,
  TextContainer,
  ButtonsContainer,
  RightButton,
  LeftButton,
  Ul
} from "./filledPortfolios.js";

class FilledPortfolios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false
    };
  }
  moveNext = () => {
    this.refs.listScroll.scrollLeft += 220;
    if (
      this.refs.listScroll.scrollLeft + this.refs.listScroll.clientWidth >=
      this.refs.listScroll.scrollWidth - 1
    ) {
      this.refs.listScroll.scrollLeft = 10;
    }
  };
  movePrevious = () => {
    this.refs.listScroll.scrollLeft -= 220;
    if (this.refs.listScroll.scrollLeft === 0) {
      this.refs.listScroll.scrollLeft = this.refs.listScroll.scrollWidth;
    }
  };
  isButtonsVisable() {
    if (this.refs.listScroll.scrollWidth > this.refs.listScroll.offsetWidth) {
      this.setState({ showButtons: true });
    }
  }
  // DOM is not loaded before, then scrollWidth count the real overflow only in compoenentDidUpdate
  componentDidUpdate() {
    if (!this.state.showButtons && this.props.portfolios.length !== 0) {
      this.isButtonsVisable();
    }
  }

  componentDidMount() {
    if (this.props.portfolios.length !== 0) {
      this.isButtonsVisable();
    }
  }
  render() {
    if (this.props.portfolios.length === 0) {
      return (
          <TextContainer>
            <h1>You have no portfolios to show </h1>
          </TextContainer>
      );
    }
    return (
      <Container>
        <Ul ref={"listScroll"}>
          {this.props.portfolios.map(portfolio => {
            return (
              <li key={portfolio.portfolio_name}>
                <PortfolioChartContainer portfolio={portfolio} />
              </li>
            );
          })}
        </Ul>
        <ButtonsContainer>
          {this.state.showButtons && (
            <>
              <LeftButton type="submit" onClick={this.movePrevious}>
                <LeftArrow width="50" height="50" color={Theme.primaryColor} />
              </LeftButton>
              <RightButton type="submit" onClick={this.moveNext}>
                <RightArrow width="50" height="50" color="white" />
              </RightButton>
            </>
          )}
        </ButtonsContainer>
      </Container>
    );
  }
}
export default FilledPortfolios;

FilledPortfolios.propTypes = {
  portfolios: PropTypes.array.isRequired
};
