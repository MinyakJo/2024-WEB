// ===== Library =====

import React from "react";
import GlobalFonts from "layout/font/font";
import { Route, Routes } from "react-router-dom";

// ===== Components =====

import Div from "layout/Div";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";

// ===== Code =====

const App = () => {
  return (
    <Div width="100vw" height="100vh">
      {/* 폰트 */}
      <GlobalFonts />
      {/* 페이지 라우터 */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Div>
  );
};

export default App;
