import Div from "./Div";
import CommonStyle from "components/style";
import React from "react";
import styled, { keyframes } from "styled-components";

//type
type loaderType = {
  backgroundColor?: string;
};

const flash = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Loader1 = styled.div<loaderType>`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: ${(props) => {
    return props.backgroundColor
      ? CommonStyle.setColor(props.backgroundColor)
      : CommonStyle.setColor("grey");
  }};
  border-radius: 50%;

  animation: ${flash} 1.2s ease-in infinite alternate;
`;

const Loader2 = styled.div<loaderType>`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: ${(props) => {
    return props.backgroundColor
      ? CommonStyle.setColor(props.backgroundColor)
      : CommonStyle.setColor("grey");
  }};
  border-radius: 50%;

  animation: ${flash} 1.2s ease-in 0.3s infinite alternate;
`;

const Loader3 = styled.div<loaderType>`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: ${(props) => {
    return props.backgroundColor
      ? CommonStyle.setColor(props.backgroundColor)
      : CommonStyle.setColor("grey");
  }};
  border-radius: 50%;

  animation: ${flash} 1.2s ease-in 0.6s infinite alternate;
`;

type propsType = {
  width: string;
  backgroundColor?: string;
};

const Loader = ({ width, backgroundColor }: propsType) => {
  return (
    <Div flex="row_center" height="fit-content!important">
      <Div
        width={width}
        marginRight={`calc( ${width} / 2 )`}
        marginLeft={`calc( ${width} / 2 )`}
      >
        <Loader1 backgroundColor={backgroundColor} />
      </Div>
      <Div
        width={width}
        marginRight={`calc( ${width} / 2 )`}
        marginLeft={`calc( ${width} / 2 )`}
      >
        <Loader2 backgroundColor={backgroundColor} />
      </Div>
      <Div
        width={width}
        marginRight={`calc( ${width} / 2 )`}
        marginLeft={`calc( ${width} / 2 )`}
      >
        <Loader3 backgroundColor={backgroundColor} />
      </Div>
    </Div>
  );
};

export default Loader;
