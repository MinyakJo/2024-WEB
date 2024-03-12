// ===== Library =====

import styled from "styled-components";

// ===== Module =====

import CommonStyle from "components/style";

// ===== Style =====

type propsType = {
  flex?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingBottom?: string;
  padding?: string;
  backgroundColor?: string;
  borderColor?: string;
  radius?: string;
};

const Div = styled.div<propsType>`
  box-sizing: border-box;

  ${(props) => {
    return props.flex ? CommonStyle.setFlex(props.flex) : null;
  }};

  width: ${(props) => {
    return props.width ? props.width : "100%";
  }};
  height: ${(props) => {
    return props.height ? props.height : "fit-content";
  }};

  margin-top: ${(props) => {
    return props.marginTop ? props.marginTop : "0px";
  }};
  margin-bottom: ${(props) => {
    return props.marginBottom ? props.marginBottom : "0px";
  }};
  margin-left: ${(props) => {
    return props.marginLeft ? props.marginLeft : "0px";
  }};
  margin-right: ${(props) => {
    return props.marginRight ? props.marginRight : "0px";
  }};

  padding: ${(props) => {
    return props.padding ? props.padding : null;
  }};
  padding-top: ${(props) => {
    return props.paddingTop ? props.paddingTop : null;
  }};
  padding-bottom: ${(props) => {
    return props.paddingBottom ? props.paddingBottom : null;
  }};
  padding-left: ${(props) => {
    return props.paddingLeft ? props.paddingLeft : null;
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
`;

export default Div;
