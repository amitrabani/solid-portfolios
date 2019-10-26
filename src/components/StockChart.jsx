import React from "react"
import Theme from '../elements/Theme'
var CanvasJSReact = require('../canvasjs.react').default;
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class StockChart extends React.Component {
	constructor(props) {
		super(props);
	}

	render(props) {
		const options = {
			animationEnabled: true,
			animationDuration: 2000,
			backgroundColor:'transparent',
			title: {
				text: "S&P 500",
				fontSize: 20,
				fontColor: Theme.secondaryColor
			},
			axisX: {
				lineThickness: 1,
			},
			axisY: {
				lineThickness: 1,
				gridColor:'transparent'
			},
			data: [{
				type: "splineArea",
				interactivityEnabled: false,
				lineThickness:4,
				color: 1 > 0 ? '#0080005e' : Theme.negativeColor,
				markerSize: 3,
				markerType:'circle',
				markerColor: '#0080005e',
				fillOpacity: 1,
				dataPoints: [
					{ x: 1,y: 77 },
					{ x: 2,y: 8 },
					{ x: 3,y: 9 },
					{ x: 4,y: 4 }]
			}]
		}

		return (
				<div style={{ marginTop:'30px', position: 'relative', width:'100%', height:'fit-content' }} >
					<CanvasJSChart  width='500px' height="500px" options={options}/>
				</div>
		)

	}





	
}
export default StockChart