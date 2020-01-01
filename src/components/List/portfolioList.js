import styled from 'styled-components'
import Theme from '../../elements/Theme'

export const Container = styled.div`
    height:inherit;
    background: transparent;
    position: relative;
    overflow: auto;
    border-radius: 5px;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
    width: 10px;
    width: 10px;
    border-radius: 8px;
    border: 10px solid #ffffff40;
    }
::-webkit-scrollbar-thumb {
      background:${Theme.primaryColor} !important; 
      opacity:0.4;
      border-radius: 2em;
    }
    h2{
    font-family:${Theme.fonts.primaryFontFamily};
    color:${Theme.primaryColor}
    }`
export const ListElement = styled.ul`  
        padding: 7px;
        margin: 0;
        width: -webkit-fill-available;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 10px;
        border-width: 2px 2px 2px 2px;
        border-style: solid;
        border-color:  #80808059;
        border-radius: 15px;
        background: transparent;
        appearance: none;
        cursor: pointer;
        list-style: none;   
        padding: 0; 
                `
export const ListItem = styled.li`
        text-align: left;
        border-radius: 10px; 
        font-size: large;
        padding: 0.5em;
        display: flex;
        text-align: center;
            
            a{
        color: ${Theme.primaryColor};
        display: flex;
        align-items: center;
        text-decoration:none;
        }
        span { 
        visibility : hidden; 
        width: 0;
        height: 0;
        }
        &:hover  span{
            visibility: visible; 
            width: 20px;
            height: 20px;
            margin-right:20px;
        }
        &:hover{
        background-color:#0000004f;
        }
            `
