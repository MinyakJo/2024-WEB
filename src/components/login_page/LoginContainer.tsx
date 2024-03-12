import React from "react";
import styled from "styled-components";

//component
import Div from "layout/Div";
import Img from "layout/Img";
import LoginInputComponent from "./LoginInputComponent";
import LoginButtonComponent from "./LoginButtonComponent";
import LoginAlert from "./LoginAlert";
import AppDownloadButtonComponent from "../AppDownloadButtonComponent";
import LinkButtonComponent from "../LinkButtonComponent";

//img, icon
import logo from "../../assets/logo.svg";

//type
type MainContainerType = {
  minWidth?: string;
  maxWidth?: string;
};

//styled
const MainContainer = styled(Div)<MainContainerType>`
  max-width: ${(props) => {
    return props.maxWidth ? props.maxWidth : null;
  }};
  min-width: ${(props) => {
    return props.minWidth ? props.minWidth : null;
  }};
`;

const LoginContainer = () => {
  return (
    <MainContainer flex="column_top" maxWidth="416px" minWidth="416px">
      {/* 로그인 메인 */}
      <Div
        flex="column_center"
        padding="70px 48px"
        paddingBottom="40px"
        borderColor="200"
        marginBottom="10px"
        backgroundColor="white"
      >
        {/* 로고 */}
        <Div width="217px" height="80px" marginBottom="57px">
          <Img src={logo} />
        </Div>

        {/* 로그인, 비밀번호 */}
        <LoginInputComponent />

        {/* 로그인 버튼 */}
        <LoginButtonComponent />

        {/* 비밀번호를 잊으셨나요? */}
        <LoginAlert />
      </Div>
      {/* 가입하기 버튼 */}
      <LinkButtonComponent link="sign-up" accent="가입하기">
        계정이 없으신가요?
      </LinkButtonComponent>
      {/* 앱을 다운로드 하세요, 앱 다운로드 버튼 */}
      <AppDownloadButtonComponent />
    </MainContainer>
  );
};

export default LoginContainer;
