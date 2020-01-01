import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
var CanvasJSReact = require('../../canvasjs.react').default;
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const Container = styled.div`
	margin-top:30px;
	position: relative;
	width:100%;
	height:fit-content;
	border-width: 2px;
	border-style: solid;
	border-color: #80808059;
	border-radius: 10px;
`

const MarketIndexChart = (props) => {
		return (
	 <Container >
		 <CanvasJSChart  width='500px' height="500px" options={props.options}/>
				</Container>
		)
}
export default MarketIndexChart;

MarketIndexChart.propTypes = {
    options: PropTypes.object.isRequired,
}


