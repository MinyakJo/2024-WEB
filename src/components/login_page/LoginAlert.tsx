import React from "react";
// import styled from "styled-components"

//component
import Div from "layout/Div";
import P from "layout/P";

//styled
// const HiddentText = styled( P )`
//     text-align: center;
// `

const LoginAlert = () => {
  //추후 로그인 실패 알림 올때 숨겨진 텍스트 보이게 작업

  return (
    <Div marginTop="30px">
      {/* 로그인 실패 했을때의 숨겨진 텍스트 */}
      {/* <Div marginBottom="10px">
                <HiddentText color="red" fontFamily="semiBold" fontWeight="600" fontSize="small" lineHeight="20px">
                    잘못된 비밀번호입니다. 다시 확인하세요.
                    잘못된 비밀번호입니다. 다시 확인하세요.
                </HiddentText>
            </Div> */}

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
