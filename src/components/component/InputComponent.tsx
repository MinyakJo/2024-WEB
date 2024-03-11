import React from "react"
import styled from "styled-components"

//component
import Div from "components/common/Div"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import Input from "components/common/Input"
import Button from "components/common/Button"

//type
type propsType = {
    id?: string
    height?: string
    icon?: string
    iconWidth?: string
    placeholder?: string
    placeholderColor?: string
    color?: string
    fontFamily?: string
    fontSize?: string
    fontWeight?: string
    borderColor?: string
    maxSize?: number
    type?: string
    value: string
    onChange?: React.ChangeEventHandler< HTMLInputElement >
    onKeyUp?: React.KeyboardEventHandler< HTMLInputElement >
}
type inputContainerType = {
    boxShadow?: string
}

//styled
const InputContainer = styled( Div )< inputContainerType >`
    box-shadow: ${props => {
        return props.boxShadow ? props.boxShadow : null
    }};
`
const PasswordHideButtonContainer = styled( Div )`
    min-width: ${props => {
        return props.width ? props.width : null
    }};
`


const InputComponent = ( { 
        height, icon, iconWidth, 
        onChange, placeholder, placeholderColor, 
        fontFamily, fontSize, fontWeight, 
        color, borderColor, id,
        maxSize, type, onKeyUp,
        value
    }: propsType ) => {
    return (
        <InputContainer flex="row" height={ height ? height : "44px" } radius="30px" padding="13px 14px" borderColor={ borderColor ? borderColor : "300" }>
            {/* 인풋창 아이콘 */}
            <Icon width={ iconWidth ? iconWidth : "20px" } marginRight="8px">
                <Img src={ icon }/>
            </Icon>
            {/* 인풋창 */}
            <Input
                id={ id }
                type={ type ? type : "text" }
                color={ color ? color : "900" }
                fontSize={ fontSize ? fontSize : "medium" }
                fontFamily={ fontFamily }
                fontWeight={ fontWeight ? fontWeight : "500" }
                placeholderColor={ placeholderColor ? placeholderColor : "500" }
                placeholder={ placeholder }
                maxLength={ maxSize }
                onChange={ onChange }
                onKeyUp={ onKeyUp }
                value={ value }
                autoComplete="off"
            />
            {/* 비밀번호 표시, 숨기기 버튼 */}
            {
                id === "pw" && value.length >= 1 &&
                <PasswordHideButtonContainer width="100px">
                    <Button 
                        flex="row_end"
                        id={ type === "password" ? "hidePw" : "showPw" } 
                        color="900" 
                        fontWeight="600" 
                        fontSize="medium" 
                        lineHeight="24px" 
                        fontFamily="semiBold"
                    >
                        {
                            type === "password" ?
                            "비밀번호 표시" :
                            "숨기기"
                        }
                    </Button>
                </PasswordHideButtonContainer>
            }
        </InputContainer>
    )
}

export default InputComponent