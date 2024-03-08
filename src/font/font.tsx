// ===== Library =====

import { createGlobalStyle } from "styled-components";
// ===== Files =====

import NotoSans from "font/NotoSansKR-Regular.otf"
import BlackHanSans from "font/BlackHanSans-Regular.ttf"

// ===== Style =====

const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: "regular";
        src: url(${NotoSans});
    }

    @font-face {
        font-family: "bold";
        src: url(${BlackHanSans});
    }
`

export default GlobalFonts