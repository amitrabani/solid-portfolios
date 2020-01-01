import styled, { keyframes } from 'styled-components';
import { ReactComponent as ReactLogo } from '../../icons/down.svg'
import Theme from '../../elements/Theme'; 

export const move = keyframes`
50% {
		margin-top: 20px;
	}
`
export const StyledLogo = styled(ReactLogo)`
	fill	:white;
    margin: 0 auto 100px auto;
    height: 5em;
    width: 5em;
`
export const Container = styled.div`
    margin-top: 10px;
	:hover  ${StyledLogo}{
	animation: ${move} 1s infinite;
	}
`
export const IconContainer = styled.div`
	height: 120px	;
	overflow: hidden;
`
export const Button = styled.button`
	background: ${Theme.primaryColor};
	color: #fff;
	border: 3px solid ${Theme.primaryColor};
	border-radius: 50px;
	padding: 0.8rem 2rem;
	font: 24px"Margarine", sans-serif;
	outline: none;
	cursor: pointer;
	position: relative;
	transition: 0.2s ease-in-out;
	letter-spacing: 2px;
	opacity: 0.8;
	:hover{
		opacity: 1;
	}
`

