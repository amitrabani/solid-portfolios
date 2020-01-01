import React from "react"
import PropTypes from 'prop-types'
var CanvasJSReact = require('../../canvasjs.react').default;
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const PortfolioChart = (props) => {
		return (
			<div style={{ width: '220px' }} >
				<CanvasJSChart options={props.options} />
			</div>
		)
	}
export default PortfolioChart

PortfolioChart.propTypes = {
    options: PropTypes.object.isRequired,
}