import React from "react"
import { lightBaseTheme } from "material-ui/styles";
import { green100 } from "material-ui/styles/colors";
var CanvasJSReact = require('../canvasjs.react').default;
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart



CanvasJS.addColorSet("colorSet4",
	[
		'#accbf7', '#acf7d8', '#f7d8ac', '#f7accb', '#cbf7ac', '#d8acf7'

	]);
class PortfolioChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			chartData: [],
			portfolioTitle: ''
		}
	}



	// this.movePrevious = this.movePrevious.bind(this)
	createChartData() {
		let newChart = []
		this.props.portfolio.map(element => {
			newChart.push({ label: element.ticker, y: 56 })
		})
		this.setState({ chartData: newChart, portfolioTitle: "Portfolio 1" })
	}

	componentDidMount() {
		this.createChartData()
	}
	render(props) {

		const options = {

			animation: {
				duration: 4000
			},
			interactivityEnabled: false,

			colorSet: "colorSet4",
			title: {
				text: this.state.portfolioTitle
			},
			height: 220,
			width: 220,

			data: [{
				type: "doughnut",
				indexLabelOrientation: "vertical",
				innerRadius: 30,
				radius: "100%",
				indexLabel: "{label}: {y}%",
				startAngle: 90,
				animationEnabled: true,

				indexLabelPlacement: "inside",
				radius: 120,
				indexLabelFontSize: 10,
				indexLabelFontColor: 'black',
				indexLabelFontStyle: 'italic',
				indexLabelFontWeight: 'bold',
				indexLabelAutoFit: true,
				indexLabelMaxWidth: 45,
				indexLabelWrap: true,
				dataPoints:
					[...this.state.chartData]
			}]
		}
		return (
			<div  >

				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */

				/>
				<h4 style={{
					position: 'relative',
					bottom: '130px',
					zIndex: 1,
					marginRight: '2px',
					color: 'rgb(0, 206, 8)'
				}}>+11%</h4>
			</div>
		)

	}
}
export default PortfolioChart