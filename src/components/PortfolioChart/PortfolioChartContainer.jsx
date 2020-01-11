import React from "react";
import Theme from "../../elements/Theme";
import PortfolioChart from "./PortfolioChart.jsx";
var CanvasJSReact = require("../../canvasjs.react").default;
var CanvasJS = CanvasJSReact.CanvasJS;

class PortfolioChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }
  addColorSet = () => {
    CanvasJS.addColorSet("colorSet", [
      "#5A89AA",
      "#3D9FB2",
      "#2AB4AD",
      "#37C0A4",
      "#44C69F",
      "#52CB98",
      "#83DA82"
    ]);
  };
  createChartData = () => {
    let newChart = [];
    this.props.portfolio.securities.forEach(element => {
      newChart.push({ label: element.ticker, y: 56 });
    });
    this.setState({ chartData: newChart });
  };

  componentDidMount() {
    this.createChartData();
  }
  createChartOptions = () => {
    this.addColorSet();
    const options = {
      animation: {
        duration: 4000
      },
      interactivityEnabled: false,

      colorSet: "colorSet",
      title: {
        text: this.props.portfolio.portfolio_name,
        fontColor: Theme.primaryColor
      },
      subtitles: [
        {
          //calaculate the sum of all stocks when bought minus the sum of all stocks now
          text: 1,
          fontSize: "20",
          fontColor: 1 > 0 ? Theme.positiveColor : Theme.negativeColor,
          verticalAlign: "center",
          dockInsidePlotArea: true
        }
      ],
      height: 220,
      width: 220,
      backgroundColor: "transparent",
      data: [
        {
          type: "doughnut",
          indexLabelOrientation: "vertical",
          innerRadius: 30,
          radius: "100%",
          indexLabel: "{label}: {y}%",
          startAngle: 90,
          animationEnabled: true,
          indexLabelPlacement: "inside",
          indexLabelFontSize: 10,
          indexLabelFontColor: "black",
          indexLabelFontStyle: "italic",
          indexLabelFontWeight: "bold",
          indexLabelAutoFit: true,
          indexLabelMaxWidth: 45,
          indexLabelWrap: true,
          dataPoints: [...this.state.chartData]
        }
      ]
    };
    return options;
  };
  render() {
    return (
      <div style={{ width: "220px" }}>
        <PortfolioChart options={this.createChartOptions()} />
      </div>
    );
  }
}
export default PortfolioChartContainer;
