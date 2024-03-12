// ===== Library =====

import styled from "styled-components";

// ===== Module =====

import CommonStyle from "components/style";

// ===== Style =====

type propsType = {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letter?: string;
};

const H2 = styled.h2<propsType>`
  width: fit-content;
  height: fit-content;
  min-height: 0;
  margin: 0;
  padding: 0;

  color: ${(props) => {
    return props.color
      ? CommonStyle.setColor(props.color)
      : CommonStyle.setColor("black");
  }};
  font-family: ${(props) => {
    return props.fontFamily ? props.fontFamily : "medium";
  }};
  font-size: ${(props) => {
    return props.fontSize
      ? CommonStyle.setFontSize(props.fontSize)
      : CommonStyle.setFontSize("medium");
  }};
  font-weight: ${(props) => {
    return props.fontWeight ? props.fontWeight : "400";
  }};
  line-height: ${(props) => {
    return props.lineHeight ? props.lineHeight : null;
  }};
  letter-spacing: ${(props) => {
    return props.letter ? props.letter : null;
  }};
  user-select: none;
`;

export default H2;
