import React from "react"

//component
import Div from "components/common/Div"
import Button from "components/common/Button"

//type
type propsType = {
    flex?: string
    backgroundColor?: string
    fontSize?: string
    fontFamily?: string
    fontWeight?: string
    lineHeight?: string
    letter?: string
    color?: string
    cursor?: string
    children?: React.ReactNode
}

const ButtonComponent = ( { 
    backgroundColor, fontSize, fontFamily, 
    fontWeight, lineHeight, letter, 
    children, color, cursor,
    flex
} : propsType ) => {
    return (
        <Div height="100%" radius="30px" backgroundColor={ backgroundColor ? backgroundColor : "300" }>
            <Button 
                flex={ flex }
                fontSize={ fontSize ? fontSize : "medium_small" } 
                fontFamily={ fontFamily } 
                fontWeight={ fontWeight ? fontWeight : "600" } 
                lineHeight={ lineHeight ? lineHeight : "18px" }
                letter={ letter }
                color={ color ? color : "black" }
                cursor={ cursor }
            >
                { children }
            </Button>
        </Div>
    )
}

export default ButtonComponent