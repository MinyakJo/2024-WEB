import React from "react";
import { useRecoilValue } from "recoil";
import { loginCheckState } from "recoil/loginAtom";

//component
import Div from "layout/Div";
import ButtonComponent from "../ButtonComponent";
import P from "layout/P";
import Icon from "layout/Icon";
import Img from "layout/Img";

//icon, img
import kakao_icon from "../../assets/login_kakao_icon.svg";

const LoginButtonComponent = () => {
  //recoil
  const loginCheck = useRecoilValue(loginCheckState); //true: 로그인 버튼 활성화 false: 로그인 버튼 비활성화

  return (
    <Div marginTop="20px">
      {/* 로그인 버튼 */}
      <Div height="44px">
        <ButtonComponent
          color="white"
          fontSize="medium"
          backgroundColor={loginCheck ? "blue" : "sky_blue"}
          cursor={loginCheck ? "pointer" : "default"}
        >
          로그인
        </ButtonComponent>
      </Div>
      <Div flex="row_center" marginTop="10px" marginBottom="10px">
        <P color="500" fontWeight="400" fontSize="medium" lineHeight="24px">
          or
        </P>
      </Div>
      {/* 카카오 로그인 버튼 */}
      <Div height="44px">
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
    </Div>
  );
};

export default LoginButtonComponent;
