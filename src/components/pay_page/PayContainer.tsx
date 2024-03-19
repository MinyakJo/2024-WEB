import React from "react";
import styled from "styled-components";
import CommonStyle from "components/style";

//component
import Div from "layout/Div";
import Img from "layout/Img";
import P from "layout/P";
import Button from "layout/Button";
import AppDownloadButtonComponent from "components/AppDownloadButtonComponent";

//img
import phone from "../../assets/login_phone.svg";
import logo from "../../assets/logo.svg";
import PayButton from "./PayButton";

const BorderContainer = styled(Div)`
  border: 1px solid ${CommonStyle.setColor("200")};
  border-top: 0px;
`;
const PayIntroContainer = styled(Div)`
  min-width: 450px;
  max-width: 450px;
  p {
    text-align: center;
  }
`;

const PayContainer = () => {
  return (
    <Div flex="row_center" height="780px" marginTop="83px">
      {/* 그림 */}
      <Div height="100%" marginRight="54px">
        <Img width="none" height="100%" src={phone} />
      </Div>
      {/* 결제 창 */}
      <PayIntroContainer
        height="100%"
        padding="0px 17px"
        backgroundColor="white"
      >
        <BorderContainer
          flex="column_center"
          padding="50px 48px"
          paddingBottom="179px"
        >
          {/* 로고 */}
          <Div width="217px" height="80px">
            <Img src={logo} />
          </Div>
          {/* 결제 문구 */}
          <Div flex="row_center" marginTop="10px">
            <P
              color="500"
              fontFamily="bold"
              fontWeight="700"
              fontSize="medium"
              lineHeight="24px"
            >
              서비스를 구독하고, 더 다양한 소식을 받아보세요
            </P>
          </Div>
          <Div flex="row_center" marginTop="23px">
            <P
              color="#2C2C2C"
              fontWeight="700"
              fontSize="medium_large"
              lineHeight="24px"
            >
              월 9,900원으로 구독하기
            </P>
          </Div>
          {/* 버튼 */}
          <PayButton />
          <Div flex="row_center" marginTop="10px">
            <Div width="fit-content">
              <Button
                color="#101828"
                fontSize="small"
                fontWeight="400"
                lineHeight="16.7px"
              >
                이용약관 확인하기
              </Button>
            </Div>
          </Div>
        </BorderContainer>
        {/* 앱 다운로드 버튼 */}
        <Div marginTop="71px">
          <AppDownloadButtonComponent />
        </Div>
      </PayIntroContainer>
    </Div>
  );
};

export default PayContainer;
