// ======= Library =======

import styled from 'styled-components';

// ======= Module =======

import CommonStyle from "components/style"

// ======= Style =======

type propsType = {
    flex?: string
    color?: string
    fontFamily?: string
    fontSize?: string
    fontWeight?: string
    backgroundColor?: string
    borderColor?: string
    radius?: string
    letter?: string
    lineHeight?: string
    cursor?: string
}

const Button = styled.button< propsType >`

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;

    ${props => {
        return props.flex ? CommonStyle.setFlex(props.flex) : null
    }};
    
    color: ${props => {
        return props.color ? CommonStyle.setColor(props.color) : CommonStyle.setColor("black")
    }};
    font-family: ${props => {
        return props.fontFamily ? props.fontFamily : "medium"
    }};
    font-size: ${props => {
        return props.fontSize ? CommonStyle.setFontSize(props.fontSize) : CommonStyle.setFontSize("medium")
    }};
    font-weight: ${props => {
        return props.fontWeight ? props.fontWeight : "400"
    }};
    letter-spacing: ${props => {
        return props.letter ? props.letter : null
    }};
    line-height: ${props => {
        return props.lineHeight ? props.lineHeight : null
    }};

    background-color: ${props => {
        return props.backgroundColor ? CommonStyle.setColor(props.backgroundColor) : CommonStyle.setColor("none")
    }};
    border: ${props => {
        return props.borderColor ? `1px solid ${CommonStyle.setColor(props.borderColor)}` : null
    }};
    border-radius: ${props => {
        return props.radius ? props.radius : null 
    }};

    
    cursor: ${props => {
        return props.cursor ? props.cursor : "pointer" 
    }};
    user-select: none;
`

export default Button