import React from "react"
import Theme from '../elements/Theme';
var CanvasJSReact = require('../canvasjs.react').default;
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class PortfolioChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			chartData: [],
		}

	}
	addColorSet() {
		CanvasJS.addColorSet("colorSet",
			["#7D5D7F", "#766B91", "#7A6488", "#7E5676", "#6A7A9F", "#72D589", "#62D091", "#7E4F6C", "#717299", "#6382A5", "#4798B0", "#33A6B1", "#2EBAA9", "#2DADB0", "#5191AE", "#5A89AA", "#3D9FB2", "#2AB4AD", "#37C0A4", "#44C69F", "#52CB98", "#83DA82"]
		);
	}
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
		this.addColorSet()
		const options = {
			animation: {
				duration: 4000
			},
			interactivityEnabled: false,

			colorSet: 'colorSet',
			title: {
				text: this.props.portfolio[0].portfolioTitle,
				fontColor: Theme.dataColor

			},
			subtitles: [{
				text: this.props.portfolio[0].open,
				fontSize: '20',
				fontColor: (this.props.portfolio[0].open > 0) ? Theme.positiveColor : Theme.negativeColor,
				verticalAlign: "center",
				dockInsidePlotArea: true
			}],
			height: 220,
			width: 220,
			backgroundColor: 'transparent',
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
			<div style={{ width: '220px' }} >
				<CanvasJSChart options={options} />
			</div>
		)
	}
}
export default PortfolioChart