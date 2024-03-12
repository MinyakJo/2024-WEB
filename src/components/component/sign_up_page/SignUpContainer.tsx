import React from "react";
import styled from "styled-components";

//component
import Div from "components/common/Div";
import Img from "components/common/Img";
import H1 from "components/common/H1";
import ButtonComponent from "../ButtonComponent";
import Icon from "components/common/Icon";

//icon, img
import logo from "../../../svg/logo.svg";
import kakao_icon from "../../../svg/login_kakao_icon.svg";
import P from "components/common/P";
import SignUpInputComponent from "./SignUpInputComponent";
import SignUpButtonComponent from "./SignUpButtonComponent";
import LinkButtonComponent from "../LinkButtonComponent";
import AppDownloadButtonComponent from "../AppDownloadButtonComponent";

//type
type MainContainerType = {
  maxWidth?: string;
};

//styled
const MainContainer = styled(Div)<MainContainerType>`
  max-width: ${(props) => {
    return props.maxWidth ? props.maxWidth : null;
  }};
`;

const SignUpContainer = () => {
  return (
    <MainContainer maxWidth="416px">
      {/* 회원가입 입력창 */}
      <Div
        flex="column_center"
        padding="50px 48px"
        paddingBottom="40px"
        backgroundColor="white"
        borderColor="200"
        marginBottom="10px"
      >
        {/* 로고 */}
        <Div width="217px" height="80px">
          <Img src={logo} />
        </Div>
        {/* 머릿말 */}
        <Div flex="row_center" marginTop="10px">
          <H1
            color="500"
            fontSize="medium"
            fontWeight="700"
            lineHeight="24px"
            fontFamily="bold"
          >
            친구들과 함께 여행 이야기를 공유하고 보세요.
          </H1>
        </Div>
        {/* 카카로 로그인 */}
        <Div height="44px" marginTop="30px">
          <ButtonComponent
            flex="row_center"
            color="brown"
            fontSize="medium"
            backgroundColor="kakao"
          >
            <Icon width="20px" marginRight="2px">
              <Img src={kakao_icon} />
            </Icon>
            카카오 로그인
          </ButtonComponent>
        </Div>
        {/* or */}
        <Div flex="row_center" marginTop="10px">
          <P
            color="700"
            fontWeight="400"
            fontFamily="regular"
            fontSize="medium"
            lineHeight="24px"
          >
            or
          </P>
        </Div>
        {/* 회원 가입 입력창 */}
        <SignUpInputComponent />

        {/* 가입 버튼창 */}
        <SignUpButtonComponent />
      </Div>
      {/* 계정이 있으신가요? */}
      <LinkButtonComponent link="login" accent="로그인">
        계정이 있으신가요?
      </LinkButtonComponent>

      {/* 앱다운로드 버튼 */}
      <AppDownloadButtonComponent />
    </MainContainer>
  );
};

export default SignUpContainer;
