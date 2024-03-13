// ======= Library =======

import styled from "styled-components";

// ======= Module =======

import CommonStyle from "components/style";

// ======= Style =======

type propsType = {
  height?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  radius?: string;
  placeholderColor?: string;
  paddingRight?: string;
  scrollWidth?: string;
  scrollBackgroundColor?: string;
  scrollRadius?: string;
  letter?: string;
};

const Textarea = styled.textarea<propsType>`
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  resize: none;

  height: ${(props) => {
    return props.height ? props.height : "100%";
  }};
  color: ${(props) => {
    return props.color ? CommonStyle.setColor(props.color) : "black";
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
  letter-spacing: ${(props) => {
    return props.letter ? props.letter : null;
  }};

  padding-right: ${(props) => {
    return props.paddingRight ? props.paddingRight : null;
  }};

  background-color: ${(props) => {
    return props.backgroundColor
      ? CommonStyle.setColor(props.backgroundColor)
      : CommonStyle.setColor("none");
  }};
  border: ${(props) => {
    return props.borderColor
      ? `1px solid ${CommonStyle.setColor(props.borderColor)}`
      : null;
  }};
  border-radius: ${(props) => {
    return props.radius ? props.radius : null;
  }};

  ::placeholder {
    color: ${(props) => {
      return props.placeholderColor ? props.placeholderColor : null;
    }};
  }

  ::-webkit-scrollbar {
    width: ${(props) => {
      return props.scrollWidth ? props.scrollWidth : null;
    }};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
      return props.scrollBackgroundColor
        ? CommonStyle.setColor(props.scrollBackgroundColor)
        : null;
    }};
    border-radius: ${(props) => {
      return props.scrollRadius ? props.scrollRadius : "10px";
    }};
  }
`;

export default Textarea;