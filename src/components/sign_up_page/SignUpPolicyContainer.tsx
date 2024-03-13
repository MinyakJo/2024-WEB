import React from "react";
import styled from "styled-components";

//component
import Div from "layout/Div";
import { MainContainer } from "pages/SignUpPage";
import H1 from "layout/H1";
import P from "layout/P";
import PolicyCheckListComponent from "./PolicyCheckListComponent";

const Text = styled(P)`
  white-space: pre-line;
  text-align: center;
`;

const SignUpPolicyContainer = () => {
  return (
    <MainContainer marginBottom="10px">
      <Div
        flex="column_center"
        padding="60px 30px"
        paddingBottom="40px"
        borderColor="200"
        backgroundColor="white"
      >
        <Div width="fit-content">
          <H1
            color="900"
            fontSize="medium_large"
            fontWeight="600"
            lineHeight="28px"
            fontFamily="semiBold"
          >
            이용 약관에 동의
          </H1>
        </Div>
        <Div width="fit-content" marginTop="15px">
          <Text color="500" fontSize="small" fontWeight="400" lineHeight="22px">
            {
              "Tnovel은 회원님의 개인정보를 안전하게 보호합니다.\n새 계정을 만드려면 모든 약관에 동의하세요."
            }
          </Text>
        </Div>
        {/* 이용약관 */}
        <PolicyCheckListComponent />
      </Div>
    </MainContainer>
  );
};

export default SignUpPolicyContainer;
