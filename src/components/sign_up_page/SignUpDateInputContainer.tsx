import React from "react";

//component
import Div from "layout/Div";
import Img from "layout/Img";
import H1 from "layout/H1";
import P from "layout/P";
import { MainContainer } from "pages/SignUpPage";
import DateDropdownListComponent from "./DateDropdownListComponent";

//img, icon
import cake_icon from "../../assets/sign_birth_date_icon.svg";

const SignUpBirthDateInputContainer = () => {
  return (
    <MainContainer marginBottom="10px" borderColor="200">
      {/* 생일 입력 */}
      <Div
        flex="column_center"
        padding="60px 48px"
        paddingBottom="40px"
        backgroundColor="white"
      >
        {/* 이미지 */}
        <Div width="238px" height="170px">
          <Img src={cake_icon} />
        </Div>
        {/* 설명 */}
        <Div flex="row_center" marginTop="20px">
          <H1
            color="900"
            fontFamily="semiBold"
            fontWeight="600"
            fontSize="medium_large"
            lineHeight="28px"
          >
            생일추가
          </H1>
        </Div>
        <Div flex="column_center" marginTop="16px">
          <Div width="fit-content">
            <P color="500" fontSize="small" fontWeight="500" lineHeight="20px">
              공개 프로필에 포함되지 않습니다.
            </P>
          </Div>
          <Div width="fit-content" marginTop="5px">
            <P color="blue" fontSize="small" fontWeight="500" lineHeight="20px">
              왜 생일 정보를 입력해야 하나요?
            </P>
          </Div>
        </Div>
        {/* 생일 선택창 */}
        <DateDropdownListComponent />
      </Div>
    </MainContainer>
  );
};

export default SignUpBirthDateInputContainer;
