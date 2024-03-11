// ===== Library =====

import React from "react"
import GlobalFonts from "./font/font"
import { Route, Routes } from "react-router-dom"

// ===== Components =====

import Div from "./components/common/Div"
import LoginPage from "./components/page/LoginPage"

// ===== Code =====

const App = () => {
    return(
        <Div width="100vw" height="100vh">
            {/* 폰트 */}
            <GlobalFonts />
            {/* 페이지 라우터 */}
            <Routes>
                <Route path="/login" element={ <LoginPage/> }/>
            </Routes>
        </Div>
    )
}

export default App
