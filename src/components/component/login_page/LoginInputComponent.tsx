import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginCheckState, pwIsHideState } from "recoil/loginAtom";

//component
import Div from "components/common/Div";
import InputComponent from "../InputComponent";

//icon, img
import mail_icon from "../../../svg/mail_icon.svg";
import lock_icon from "../../../svg/lock_icon.svg";

const LoginInputComponent = () => {
  //state
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  //recoil
  //로그인 버튼 활성화 여부 set
  const setLoginCheck = useSetRecoilState(loginCheckState);
  //로그인 숨김 여부 value
  const pwIsHide = useRecoilValue(pwIsHideState);
  // const [ isHide, setIsHide ] = use

  //event
  //input 이벤트
  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copyInputs = {
      ...inputs,
      [e.target.id]: e.target.value,
    };

    setInputs(copyInputs);

    //아이디가 1자이상, 비민번호 6자 이상일때 로그인 버튼 활성화
    if (copyInputs.id.length >= 1 && copyInputs.pw.length >= 6) {
      setLoginCheck(true);
    } else {
      setLoginCheck(false);
    }
  };
  //enter 이벤트
  const onKeyUpEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //아이디가 1자이상, 비민번호 6자 이상일때
    if (inputs.id.length >= 1 && inputs.pw.length >= 6) {
      //엔터키 적용
      if (e.code === "Enter") console.log("login"); //로그인
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
