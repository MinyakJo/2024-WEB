import React from "react"
import styled from "styled-components"

//component
import Div from "components/common/Div"
import Img from "components/common/Img"
import LoginInputComponent from "./LoginInputComponent"
import LoginButtonComponent from "./LoginButtonComponent"
import LoginAlert from "./LoginAlert"
import P from "components/common/P"
import Accent from "components/common/Accent"
import Button from "components/common/Button"

//img, icon
import logo from "../../../svg/logo.svg"
import google_button from "../../../svg/google_app_store_button.svg"
import apple_button from "../../../svg/apple_app_store_button.svg"

//type
type MainContainerType = {
    minWidth?: string,
    maxWidth?: string 
}

//styled
const MainContainer = styled( Div )< MainContainerType >`
    max-width: ${props => {
        return props.maxWidth ? props.maxWidth : null
    }};
    min-width: ${props => {
        return props.minWidth ? props.minWidth : null
    }};
`

const LoginContainer = () => {

    return (
        <MainContainer flex="column_top" maxWidth="416px" minWidth="416px">
            {/* 로그인 메인 */}
            <Div flex="column_center" padding="70px 48px" paddingBottom="40px" borderColor="200" marginBottom="10px" backgroundColor="white">

                {/* 로고 */}
                <Div width="217px" height="80px" marginBottom="57px">
                    <Img src={ logo }/>
                </Div>

                {/* 로그인, 비밀번호 */}
                <LoginInputComponent/>

                {/* 로그인 버튼 */}
                <LoginButtonComponent/>

                {/* 비밀번호를 잊으셨나요? */}
                <LoginAlert/>
            </Div>
            {/* 가입하기 버튼 */}
            <Div padding="31px 0px" borderColor="200" backgroundColor="white">
                <Div flex="row_center">
                    <P color="500" fontSize="medium" fontWeight="600" fontFamily="semiBold" lineHeight="24px">
                        { "계정이 없으신가요? " }
                        <Accent id="sign-up" color="blue" cursor="pointer">
                            가입하기
                        </Accent>
                    </P>
                </Div>
            </Div>
            {/* 앱을 다운로드 하세요, 앱 다운로드 버튼 */}
            <Div marginTop="20px">
                {/* 앱을 다운로드 하세요 */}
                <Div flex="row_center">
                    <P color="500" fontWeight="500" fontSize="medium" lineHeight="24px">
                        앱을 다운로드 하세요.
                    </P>
                </Div>
                {/* 앱 다운로드 버튼 */}
                <Div flex="row_center" marginTop="10px">
                    <Div width="135px" height="40px" marginRight="5px" marginLeft="5px">
                        <Button>
                            <Img src={ google_button }/>
                        </Button>
                    </Div>
                    <Div width="135px" height="40px" marginRight="5px" marginLeft="5px">
                        <Button>
                            <Img src={ apple_button }/>
                        </Button>
                    </Div>
                </Div>
            </Div>
        </MainContainer>
    )
}

export default LoginContainer