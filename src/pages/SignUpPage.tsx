import React, { useEffect } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  idCheckState,
  nameCheckState,
  pwCheckState,
  signPwIsHideState,
  telOrEmailCheckState,
} from "recoil/signAtom";

//component
import Div from "layout/Div";
import SignUpContainer from "components/sign_up_page/SignUpContainer";

const SignUpPage = () => {
  //recoil
  //비밀번호 표시 숨기기
  const setSignPwIsHide = useSetRecoilState(signPwIsHideState);

  //state reset
  const resetSignPwIsHide = useResetRecoilState(signPwIsHideState);
  const resetTelOrEmailCheck = useResetRecoilState(telOrEmailCheckState);
  const resetNameCheck = useResetRecoilState(nameCheckState);
  const resetIdCheck = useResetRecoilState(idCheckState);
  const resetPwCheck = useResetRecoilState(pwCheckState);
  const resetHiddenAlert = useResetRecoilState(signPwIsHideState);

  //event
  //click 이벤트
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "hidePw":
        setSignPwIsHide(false);
        return;
      case "showPw":
        setSignPwIsHide(true);
        return;
      default:
        return;
    }
  };

  //useEffect
  useEffect(() => {
    return () => {
      resetSignPwIsHide();
      resetTelOrEmailCheck();
      resetNameCheck();
      resetIdCheck();
      resetPwCheck();
      resetHiddenAlert();
    };
  }, [
    resetSignPwIsHide,
    resetTelOrEmailCheck,
    resetNameCheck,
    resetIdCheck,
    resetPwCheck,
    resetPwCheck,
    resetHiddenAlert,
  ]);

  return (
    <Div
      flex="row_center"
      height="100%"
      backgroundColor="50"
      onClick={onClickEvent}
    >
      <SignUpContainer />
    </Div>
  );
};

export default SignUpPage;
