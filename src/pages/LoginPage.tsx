import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { pwIsHideState, loginCheckState } from "recoil/loginAtom";
import { nowPageNameState } from "recoil/mainAtom";

//component
import Div from "layout/Div";
import Img from "layout/Img";
import LoginContainer from "components/login_page/LoginContainer";

//img, icon
import phone from "../assets/login_phone.svg";

//type
type MainContainerType = {
  maxWidth: string;
};
type ImgContainerType = {
  minWidth: string;
};

//styled
const MainContanier = styled(Div)<MainContainerType>`
  max-width: ${(props) => {
    return props.maxWidth ? props.maxWidth : null;
  }};
`;
const ImgContainer = styled(Div)<ImgContainerType>`
  min-width: ${(props) => {
    return props.minWidth ? props.minWidth : null;
  }};
`;

const LoginPage = () => {
  //navigate
  const navigate = useNavigate();

  //recoil
  //로그인 버튼 활성화 여부 reset
  const resetLoginCheck = useResetRecoilState(loginCheckState);
  //비밀번호 숨김 여부 set, reset
  const setPwIsHide = useSetRecoilState(pwIsHideState);
  const resetPwIsHide = useResetRecoilState(pwIsHideState);
  const setNowPageName = useSetRecoilState(nowPageNameState);

  //useEffect
  useEffect(() => {
    setNowPageName("login");
  }, []);

  //event
  //click 이벤트
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "sign-up": //LoginContainer 에 있는 가입하기 버튼
        navigate(`/${id}`);
        return;
      case "hidePw":
        setPwIsHide(false);
        return;
      case "showPw":
        setPwIsHide(true);
        return;
      default:
        return;
    }
  };

  //useEffect
  useEffect(() => {
    //이 페이지를 나갈시에 recoil state 초기화
    return () => {
      resetPwIsHide();
      resetLoginCheck();
    };
  }, [resetPwIsHide, resetLoginCheck]);

  return (
    <Div
      flex="row_center"
      height="100%"
      backgroundColor="50"
      onClick={onClickEvent}
    >
      {/* 로그인 화면 */}
      <MainContanier flex="row_center" maxWidth="1440px">
        {/* 왼쪽 핸드폰 이미지 */}
        <ImgContainer
          width="520px"
          minWidth="520px"
          height="780px"
          marginRight="72px"
        >
          <Img src={phone} />
        </ImgContainer>
        {/* 로그인 입력창 */}
        <LoginContainer />
      </MainContanier>
    </Div>
  );
};

export default LoginPage;
