import React from "react";
import styled from "styled-components";

//component
import Div from "components/common/Div";

//type
type MainContainerType = {
  maxWidth?: string;
};

//styled
const MainContainer = styled(Div)<MainContainerType>`
  max-width: ${(props) => {
    return props.maxWidth ? props.maxWidth : null;
  }};
`;

const SignUpContainer = () => {
  return (
    <MainContainer maxWidth="416px" backgroundColor="white"></MainContainer>
  );
};

export default SignUpContainer;
