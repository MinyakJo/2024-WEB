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
  radius?: string;
  ratio?: string;
};

const Icon = styled.div<propsType>`
  ${(props) => {
    return props.flex ? CommonStyle.setFlex(props.flex) : "display: flex";
  }};

  width: ${(props) => {
    return props.width ? props.width : null;
  }};
  height: ${(props) => {
    return props.height ? props.height : "fit-content";
  }};

  min-width: ${(props) => {
    return props.width ? props.width : null;
  }};

  padding: ${(props) => {
    return props.padding ? props.padding : null;
  }};

  padding-left: ${(props) => {
    return props.paddingLeft ? props.paddingLeft : null;
  }};

  padding-right: ${(props) => {
    return props.paddingRight ? props.paddingRight : null;
  }};

  padding-top: ${(props) => {
    return props.paddingTop ? props.paddingTop : null;
  }};

  padding-bottom: ${(props) => {
    return props.paddingBottom ? props.paddingBottom : null;
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

  aspect-ratio: ${(props) => {
    return props.ratio ? props.ratio : "1/1";
  }};

  border-radius: ${(props) => {
    return props.radius ? props.radius : null;
  }};

  background-color: ${(props) => {
    return props.backgroundColor
      ? CommonStyle.setColor(props.backgroundColor)
      : null;
  }};

  overflow: hidden;
  box-sizing: border-box;
`;

export default Icon;
