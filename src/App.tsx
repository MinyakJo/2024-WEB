// ===== Library =====

import React, { useEffect } from "react";
import GlobalFonts from "layout/font/font";
import { Route, Routes } from "react-router-dom";
import { isLogin } from "utils/isLogin";
import { isLogout } from "utils/isLogout";
import { useMediaQuery } from "react-responsive";
import { useSetRecoilState } from "recoil";
import { isMobileState } from "recoil/mainAtom";

// ===== Components =====

import Div from "layout/Div";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import HomePage from "pages/HomePage";
import BoardPage from "pages/BoardPage";
import Dialog from "components/Dialog";

// ===== Code =====

const App = () => {
  //화면 설정
  const mq = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  //recoil
  const setIsMobile = useSetRecoilState(isMobileState);

  //useEffect
  useEffect(() => {
    setIsMobile(mq);
  }, [mq]);

  return (
    <Div width="100vw" height="100vh">
      {/* 폰트 */}
      <GlobalFonts />
      {/* 페이지 라우터 */}
      <Routes>
        <Route path="/" element={isLogin(<HomePage />)} />
        <Route path="/login" element={isLogout(<LoginPage />)} />
        <Route path="/sign-up" element={isLogout(<SignUpPage />)} />
        <Route path="/board" element={isLogin(<BoardPage />)} />
      </Routes>
      {/* 다이얼로그 */}
      <Dialog />
    </Div>
  );
};

export default App;
