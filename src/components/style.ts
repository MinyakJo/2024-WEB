// ===== Library =====

import { css } from "styled-components";

// ===== Code =====

const setFontSize = (value: string): string => {
  const font_size = {
    extra_small: "12px",
    small: "14px",
    medium_small: "15px",
    medium: "16px",
    medium_large: "18px",
    large: "20px",
    extra_large: "24px",
  };

  switch (value) {
    case "extra_small":
    case "small":
    case "medium_small":
    case "medium":
    case "medium_large":
    case "large":
    case "extra_large":
      return font_size[value];
    default:
      return value;
  }
};

const setColor = (value: string): string => {
  const color = {
    white: "#FFFFFF",
    black: "#000000",
    "900": "#191919",
    "800": "#333333",
    "700": "#4C4C4C",
    "600": "#666666",
    "500": "#7F7F7F",
    "400": "#999999",
    "300": "#B2B2B2",
    "200": "#CCCCCC",
    "100": "#E5E5E5",
    "50": "#F6F6F6",
    "10": "#FAFAFA",
    blue: "#2E90FA",
    sky_blue: "#B2DDFF",
    red: "#F04438",
    yellow: "#F8D706",
    brown: "#2F1B1A",
    kakao: "#F8D706",
    none: "#00000000",
  };

  switch (value) {
    case "white":
    case "black":
    case "900":
    case "800":
    case "700":
    case "600":
    case "500":
    case "400":
    case "300":
    case "200":
    case "100":
    case "50":
    case "10":
    case "sky_blue":
    case "blue":
    case "red":
    case "yellow":
    case "brown":
    case "kakao":
    case "none":
      return color[value];
    default:
      return value;
  }
};

const setFlex = (value: string) => {
  const flex = {
    row: css`
      display: flex;
      align-items: center;
    `,
    row_top: css`
      display: flex;
    `,
    row_center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    row_end: css`
      display: flex;
      justify-content: right;
      align-items: center;
    `,
    row_between: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,

    column: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `,
    column_top: css`
      display: flex;
      flex-direction: column;
    `,
    column_center: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    column_between: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `,
  };

  switch (value) {
    case "row":
    case "row_top":
    case "row_center":
    case "row_end":
    case "row_between":
    case "column":
    case "column_top":
    case "column_center":
    case "column_between":
      return flex[value];
    default:
      return value;
  }
};

const CommonStyle = { setFontSize, setColor, setFlex };

export default CommonStyle;
