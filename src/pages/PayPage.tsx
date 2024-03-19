import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { nowPageNameState } from "recoil/mainAtom";
import styled from "styled-components";

//component
import ProfileContainer from "components/pay_page/ProfileContainer";
import Main from "components/Main";
import Div from "layout/Div";
import PayContainer from "components/pay_page/PayContainer";

const StyledContainer = styled(Div)`
  max-width: 1024px;
`;

const PayPage = () => {
  //recoil
  const setNowPageName = useSetRecoilState(nowPageNameState);

  //useEffect
  useEffect(() => {
    setNowPageName("pay");
  }, []);

  return (
    <Div height="100%" backgroundColor="50">
      <Main height="calc(100% - 80px)">
        <StyledContainer>
          <ProfileContainer />
          <PayContainer />
        </StyledContainer>
      </Main>
    </Div>
  );
};

export default PayPage;
