// ===== Library =====

import { createGlobalStyle } from "styled-components";
// ===== Files =====

import SFDisplayRegular from "font/SF_Pro/SF-Pro-Display-Regular.otf"
import SFDisplayMedium from "font/SF_Pro/SF-Pro-Display-Medium.otf"
import SFDisplaySemiBold from "font/SF_Pro/SF-Pro-Display-Semibold.otf"

// ===== Style =====

const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: "medium";
        src: url(${SFDisplayMedium});
    }
    @font-face {
        font-family: "regular";
        src: url(${SFDisplayRegular});
    }
    @font-face {
        font-family: "semiBold";
        src: url(${SFDisplaySemiBold});
    }
`

export default GlobalFonts