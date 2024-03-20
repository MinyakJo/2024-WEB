import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  loginCheckState,
  loginHiddenAlertState,
  loginInputState,
  pwIsHideState,
} from "recoil/loginAtom";
import { useCookies } from "react-cookie";

//component
import Div from "layout/Div";
import InputComponent from "../InputComponent";

//icon, img
import mail_icon from "../../assets/mail_icon.svg";
import lock_icon from "../../assets/lock_icon.svg";
import { fetch } from "apis/fetch";
import { useNavigate } from "react-router-dom";

const LoginInputComponent = () => {
  //token
  const [, setCookie] = useCookies(["token", "id", "loginId"]);
  //navigate
  const navigate = useNavigate();
  //recoil
  //로그인 입력
  const [inputs, setInputs] = useRecoilState(loginInputState);
  //로그인 버튼 활성화 여부 set
  const setLoginCheck = useSetRecoilState(loginCheckState);
  //로그인 숨김 여부 value
  const pwIsHide = useRecoilValue(pwIsHideState);
  //로그인 히든 텍스트 보이는지 여부
  const [hiddenAlert, setHiddenAlert] = useRecoilState(loginHiddenAlertState);

  //event
  //input 이벤트
  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copyInputs = {
      ...inputs,
      [e.target.id]: e.target.value,
    };

    setInputs(copyInputs);
    setHiddenAlert({
      ...hiddenAlert,
      isHidden: true,
    });

    //아이디가 1자이상, 비민번호 6자 이상일때 로그인 버튼 활성화
    if (copyInputs.id.length >= 1 && copyInputs.pw.length >= 6) {
      setLoginCheck(true);
    } else {
      setLoginCheck(false);
    }
  };
  //enter 이벤트
  const onKeyUpEvent = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    //아이디가 1자이상, 비민번호 6자 이상일때
    if (inputs.id.length >= 1 && inputs.pw.length >= 6) {
      //엔터키 적용
      if (e.code === "Enter") {
        loginFetch();
      }
    }
  };
  //로그인
  const loginFetch = async () => {
    const fetchData = await fetch({
      method: "POST",
      url: "/auth/sign-in",
      data: {
        loginId: inputs.id,
        password: inputs.pw,
      },
    });

    if (fetchData?.data?.statusCode === 201) {
      setCookie("loginId", inputs.id);
      setCookie("id", fetchData.data.result.id);
      setCookie("token", `Bearer ${fetchData.data.result.jwt}`);
      navigate("/", { replace: true });
    } else {
      setHiddenAlert({
        text: fetchData[0],
        isHidden: false,
      });
    }
  };

  return (
    <Div marginTop="57px">
      {/* 로그인 */}
      <Div marginBottom="10px">
        <InputComponent
          id="id"
          value={inputs.id}
          onChange={onChangeEvent}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          maxSize={20}
          //style
          icon={mail_icon}
        />
      </Div>
      {/* 비밀번호 */}
      <Div marginBottom="10px">
        <InputComponent
          password
          id="pw"
          type={pwIsHide ? "password" : "text"}
          value={inputs.pw}
          onChange={onChangeEvent}
          onKeyUp={onKeyUpEvent}
          placeholder="비밀번호"
          maxSize={20}
          //style
          icon={lock_icon}
        />
      </Div>
    </Div>
  );
};

export default LoginInputComponent;
