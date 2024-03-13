import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { loginHiddenAlertState } from "recoil/loginAtom";

//component
import Div from "layout/Div";
import P from "layout/P";

//styled
const HiddentText = styled(P)`
  text-align: center;
`;

const LoginAlert = () => {
  //recoil
  const hiddenAlert = useRecoilValue(loginHiddenAlertState);

  return (
    <Div marginTop="30px">
      {/* 로그인 실패 했을때의 숨겨진 텍스트 */}
      {!hiddenAlert.isHidden && (
        <Div flex="row_center" marginBottom="10px">
          <HiddentText
            color="red"
            fontFamily="semiBold"
            fontWeight="600"
            fontSize="small"
            lineHeight="20px"
          >
            {hiddenAlert.text}
          </HiddentText>
        </Div>
      )}

      {/* 비밀번호를 잊으셨나요? */}
      <Div flex="row_center">
        <P color="500" fontWeight="400" fontSize="small" lineHeight="20px">
          비밀번호를 잊으셨나요?
        </P>
      </Div>
    </Div>
  );
};

export default LoginAlert;
