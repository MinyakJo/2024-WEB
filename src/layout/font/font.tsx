// ===== Library =====

import { createGlobalStyle } from "styled-components";
// ===== Files =====

import SFDisplayMedium from "./SF_Pro/SF-Pro-Display-Medium.otf";
import SFDisplayRegular from "./SF_Pro/SF-Pro-Display-Regular.otf";
import SFDisplaySemiBold from "./SF_Pro/SF-Pro-Display-Semibold.otf";
import SFDisplayBold from "./SF_Pro/SF-Pro-Display-Bold.otf";

// import SansMedium from "font/Noto_Sans_KR/static/NotoSansKR-Medium.ttf";
// import SansRegular from "font/Noto_Sans_KR/static/NotoSansKR-Regular.ttf";
// import SansSemiBold from "font/Noto_Sans_KR/static/NotoSansKR-SemiBold.ttf";
// import SansBold from "font/Noto_Sans_KR/static/NotoSansKR-Bold.ttf";

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
    @font-face {
        font-family: "bold";
        src: url(${SFDisplayBold});
    }
`;

export default GlobalFonts;
