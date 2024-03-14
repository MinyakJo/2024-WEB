import Div from "./Div";
import CommonStyle from "components/style";
import React from "react";
import styled, { keyframes } from "styled-components";

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

const Loader1 = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: ${CommonStyle.setColor("grey")};
  border-radius: 50%;

  animation: ${flash} 1.2s ease-in infinite alternate;
`;

const Loader2 = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: ${CommonStyle.setColor("grey")};
  border-radius: 50%;

  animation: ${flash} 1.2s ease-in 0.3s infinite alternate;
`;

const Loader3 = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: ${CommonStyle.setColor("grey")};
  border-radius: 50%;

  animation: ${flash} 1.2s ease-in 0.6s infinite alternate;
`;

type propsType = {
  width: string;
};

const Loader = ({ width }: propsType) => {
  return (
    <Div flex="row_center">
      <Div
        width={width}
        marginRight={`calc( ${width} / 2 )`}
        marginLeft={`calc( ${width} / 2 )`}
      >
        <Loader1 />
      </Div>
      <Div
        width={width}
        marginRight={`calc( ${width} / 2 )`}
        marginLeft={`calc( ${width} / 2 )`}
      >
        <Loader2 />
      </Div>
      <Div
        width={width}
        marginRight={`calc( ${width} / 2 )`}
        marginLeft={`calc( ${width} / 2 )`}
      >
        <Loader3 />
      </Div>
    </Div>
  );
};

export default Loader;
