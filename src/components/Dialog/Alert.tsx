import React from "react";
import styled from "styled-components";
import CommonStyle from "components/style";

//component
import Div from "layout/Div";
import H1 from "layout/H1";
import P from "layout/P";
import Button from "layout/Button";

const MainContainer = styled(Div)`
  max-width: 448px;
  overflow: hidden;
`;
const ButtonContainer = styled(Div)`
  border-top: 1px solid ${CommonStyle.setColor("200")};
  height: 50px;
  button {
    font-size: ${CommonStyle.setFontSize("small")};
    line-height: 20px;
  }
`;

const Alert = ({ children }: { children: any }) => {
  return (
    <MainContainer radius="10px" backgroundColor="white">
      <Div padding="40px" paddingBottom="30px">
        {/* 질문 */}
        <Div flex="row_center">
          <H1
            color="900"
            fontSize="medium"
            lineHeight="24px"
            fontWeight="600"
            fontFamily="semiBold"
          >
            {children !== undefined && children?.title !== undefined
              ? children.title
              : ""}
          </H1>
        </Div>
        {/* 설명 */}
        <Div flex="row_center">
          <P color="900" fontSize="medium" lineHeight="24px" fontWeight="500">
            {children !== undefined && children?.message !== undefined
              ? children.message
              : ""}
          </P>
        </Div>
      </Div>
      {/* 버튼 */}
      <ButtonContainer>
        <Button color="black" fontWeight="500" id="cancel">
          확인
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default Alert;
