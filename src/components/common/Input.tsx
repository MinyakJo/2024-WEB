// ======= Library =======

import styled from 'styled-components';

// ======= Module =======

import CommonStyle from "components/style"

// ======= Style =======

type propsType = {
    height?: string
    family?: string
    fontSize?: string
    weight?: string
    backgroundColor?: string
    borderColor?: string
    radius?: string
    placeholderColor?: string
}

const Input = styled.input< propsType >`

    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    
    height: ${props => {
        return props.height ? props.height : "fit-content"
    }};
    color: ${props => {
        return props.color ? CommonStyle.setColor(props.color) : "black"
    }};
    font-family: ${props => {
        return props.family ? props.family : "regular"
    }};
    font-size: ${props => {
        return props.fontSize ? CommonStyle.setFontSize(props.fontSize) : CommonStyle.setFontSize("medium")
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

    ::placeholder{
        color: ${props => {
            return props.placeholderColor ? CommonStyle.setColor(props.placeholderColor) : null
        }};    
    }
`

export default Input