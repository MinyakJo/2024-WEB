import React from "react";
import styled from "styled-components";
import InfoFollowerComponent from "./info_container/InfoFollowerComponent";

//component
import InfoProfileComponent from "./info_container/InfoProfileComponent";

const MainContainer = styled.section`
  max-width: 416px;
  min-width: 416px;
  margin-left: 104px;
`;

const InfoContainer = () => {
  return (
    <MainContainer>
      {/* 프로필 정보 */}
      <InfoProfileComponent />
      {/* 데이터 없음 */}
      <InfoFollowerComponent />
    </MainContainer>
  );
};

export default InfoContainer;
