import React from "react"
import styled from "styled-components"

//component
import Div from "components/common/Div"

//type
type MainContainerType = {
    maxWidth: string
}

//styled
const MainContainer = styled( Div )< MainContainerType >`
    max-width: ${props => {
        return props.maxWidth ? props.maxWidth : null
    }};
`

const SignUpPage = () => {

    //event
    const onClickEvent = () => {
        
    }

    return (
        <Div flex="row_center" height="100%" backgroundColor="50" onClick={ onClickEvent }>
            <MainContainer maxWidth="416px" backgroundColor="white">
                
            </MainContainer>
        </Div>
    )
}

export default SignUpPage