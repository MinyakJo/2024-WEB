// ======= Library =======

import styled from 'styled-components';

// ======= Module =======

import CommonStyle from "components/style"

// ======= Style =======

type propsType = {
    flex?: string
    color?: string
    family?: string
    size?: string
    weight?: string
    backgroundColor?: string
    borderColor?: string
    radius?: string
}

const Button = styled.button< propsType >`

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;

    ${props => {
        return props.flex ? CommonStyle.setFlex(props.flex) : null
    }};
    
    color: ${props => {
        return props.color ? CommonStyle.setColor(props.color) : CommonStyle.setColor("black")
    }};
    font-family: ${props => {
        return props.family ? props.family : "regular"
    }};
    font-size: ${props => {
        return props.size ? CommonStyle.setFontSize(props.size) : CommonStyle.setFontSize("medium")
    }};
    font-weight: ${props => {
        return props.weight ? props.weight : "400"
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
    user-select: none;
`

export default Button