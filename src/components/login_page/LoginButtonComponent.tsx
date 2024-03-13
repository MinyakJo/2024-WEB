import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  loginCheckState,
  loginHiddenAlertState,
  loginInputState,
} from "recoil/loginAtom";
import { fetch } from "apis/fetch";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

//component
import Div from "layout/Div";
import ButtonComponent from "../ButtonComponent";
import P from "layout/P";
import Icon from "layout/Icon";
import Img from "layout/Img";

//icon, img
import kakao_icon from "../../assets/login_kakao_icon.svg";

const LoginButtonComponent = () => {
  //cookie
  const [, setCookie] = useCookies(["token", "id"]);
  //navigate
  const navigate = useNavigate();
  //recoil
  const loginCheck = useRecoilValue(loginCheckState); //true: 로그인 버튼 활성화 false: 로그인 버튼 비활성화
  //입력한 값
  const inputs = useRecoilValue(loginInputState);
  //히든 매세지 보일지 안보일지 여부
  const setHiddenAlert = useSetRecoilState(loginHiddenAlertState);

  //event
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "login":
        const fetchData = await fetch({
          method: "POST",
          url: "/auth/sign-in",
          data: {
            loginId: inputs.id,
            password: inputs.pw,
          },
        });

        if (fetchData?.data?.statusCode === 201) {
          setCookie("id", fetchData.data.result.id);
          setCookie("token", fetchData.data.result.jwt);
          navigate("/", { replace: true });
        } else {
          setHiddenAlert({
            text: fetchData[0],
            isHidden: false,
          });
        }
        return;
      case "kakao":
        return;
      default:
        return;
    }
  };

  return (
    <Div marginTop="20px" onClick={onClickEvent}>
      {/* 로그인 버튼 */}
      <Div height="44px">
        <ButtonComponent
          id="login"
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
          id="kakao"
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
