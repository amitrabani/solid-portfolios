import styled from 'styled-components'
import Theme from '../../elements/Theme'

export const Container = styled.div`
    -webkit-align-items: center;
    align-items: center;
    width: 100%;

`

export const ButtonsContainer = styled.div`
    width: min-content;
    display: flex;
    margin-right: auto;
    margin-bottom: 10px;
    margin-left: auto;
`

export const Button = styled.button`
background-color: transparent;
    border-color: transparent;
    outline-color: #03dac56b;
    outline-width: thick;
    border-radius: 139px;
    border: 3px solid #ffffff5c;
    opacity: 0.8;
    width: 70px;
    height: 70px;
    margin: 5px;
    &:hover{
        opacity: 1;

    }
    &:focus{
    outline: transparent;
    }
    `

export const RightButton = styled(Button)`
    background-color:${Theme.primaryColor};
    `

export const LeftButton = styled(Button)`
    background-color:#ffffffff;
    `

export const Ul = styled.ol`
list-style-type: none;
margin-top: 0;
margin-left: auto;
margin-right: auto;
width: 95%;
display: flex;
overflow-y: hidden;
scroll-behavior: smooth;
height: 220;
align-items: center;
&&::-webkit-scrollbar {
width: 4px;
height: 10px;
}
&&::-webkit-scrollbar-thumb {
background-color: #00a8956b;
outline: 1px solid slategrey;
}

&&::-webkit-scrollbar-track {
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
  li{
    height: 220px;
    border-style: solid;
    border-color: #e0e4e94d;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 1px;
    text-transform: uppercase;
}
`