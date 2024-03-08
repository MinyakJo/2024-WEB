// ===== Library =====

import styled from 'styled-components'

// ===== Module =====

import CommonStyle from "components/style"

// ===== Style =====

type propsType = {
    color?: string
    marginRight?: string
    marginLeft?: string
}

const Accent = styled.span< propsType >`

    color: ${props => {
        return props.color ? CommonStyle.setColor(props.color) : CommonStyle.setColor("black")
    }};
    margin-right: ${props => {
        return props.marginRight ? props.marginRight : null
    }}; 
    margin-left: ${props => {
        return props.marginLeft ? props.marginLeft : null
    }};
    user-select: none;
`

export default Accent