// ===== Library =====

import styled from 'styled-components'

// ===== Module =====

// ===== Style =====

type propsType = {
    width?: string
    height?: string
    fit?: string
    cursor?: string
    radius?: string
}

const Img = styled.img< propsType >`
    width: ${props => {
        return props.width ? props.width : "100%"
    }};
    height: ${props => {
        return props.height ? props.height : null
    }};
    object-fit: ${props => {
        return props.fit ? props.fit : "contain"
    }};
    cursor: ${props => {
        return props.cursor ? props.cursor : "pointer"
    }};
    border-radius: ${props => {
        return props.radius ? props.radius : null
    }};
    user-select: none;
`

export default Img