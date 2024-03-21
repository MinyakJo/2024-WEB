import React, { useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  idCheckState,
  isBirthDatePageState,
  isPolicyPageState,
  nameCheckState,
  pwCheckState,
  signInputsState,
  signPwIsHideState,
  telOrEmailCheckState,
} from "recoil/signAtom";
import { nowPageNameState } from "recoil/mainAtom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { REDIRECT_URL } from "apis/kakao";

//component
import Div from "layout/Div";
import SignUpContainer from "components/sign_up_page/SignUpContainer";
import SignUpDateInputContainer from "components/sign_up_page/SignUpDateInputContainer";
import LinkButtonComponent from "components/LinkButtonComponent";
import AppDownloadButtonComponent from "components/AppDownloadButtonComponent";
import SignUpPolicyContainer from "components/sign_up_page/SignUpPolicyContainer";

export const MainContainer = styled(Div)`
  max-width: 416px;
`;

const SignUpPage = () => {
  //cookie
  const [cookies] = useCookies(["kakao_token"]);

  //navigate
  const navigate = useNavigate();

  //recoil
  const setNowPageName = useSetRecoilState(nowPageNameState);
  //비밀번호 표시 숨기기
  const setSignPwIsHide = useSetRecoilState(signPwIsHideState);
  //생년월일 페이지 인지 아닌지
  const isBirthDatePage = useRecoilValue(isBirthDatePageState);
  //이용약관 페이지 인지 아닌지
  const isPolicyPage = useRecoilValue(isPolicyPageState);

  //state reset
  const resetSignInputs = useResetRecoilState(signInputsState);
  const resetSignPwIsHide = useResetRecoilState(signPwIsHideState);
  const resetTelOrEmailCheck = useResetRecoilState(telOrEmailCheckState);
  const resetNameCheck = useResetRecoilState(nameCheckState);
  const resetIdCheck = useResetRecoilState(idCheckState);
  const resetPwCheck = useResetRecoilState(pwCheckState);
  const resetHiddenAlert = useResetRecoilState(signPwIsHideState);

  //event
  //click 이벤트
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "login":
        navigate(`/${id}`);
        return;
      case "hidePw":
        setSignPwIsHide(false);
        return;
      case "showPw":
        setSignPwIsHide(true);
        return;
      case "kakao":
        if (cookies.kakao_token) {
          alert("이미 카카오 정보가 등록된 상태입니다.");
          return;
        }

        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
        return;
      default:
        return;
    }
  };

  //useEffect
  useEffect(() => {
    setNowPageName("sign");

    return () => {
      resetSignPwIsHide();
      resetTelOrEmailCheck();
      resetNameCheck();
      resetIdCheck();
      resetPwCheck();
      resetHiddenAlert();
      resetSignInputs();
    };
  }, [
    resetSignPwIsHide,
    resetTelOrEmailCheck,
    resetNameCheck,
    resetIdCheck,
    resetPwCheck,
    resetPwCheck,
    resetHiddenAlert,
    resetSignInputs,
  ]);

  return (
    <Div
      flex="row_center"
      height="100%"
      backgroundColor="50"
      onClick={onClickEvent}
    >
      <MainContainer flex="column_center">
        {!isBirthDatePage ? (
          <SignUpContainer />
        ) : !isPolicyPage ? (
          <SignUpDateInputContainer />
        ) : (
          <SignUpPolicyContainer />
        )}
        {/* 계정이 있으신가요? */}
        <LinkButtonComponent link="login" accent="로그인">
          {"계정이 있으신가요? "}
        </LinkButtonComponent>

        {/* 앱다운로드 버튼 */}
        <AppDownloadButtonComponent />
      </MainContainer>
    </Div>
  );
};

export default SignUpPage;
