import React from "react";
import styled from "styled-components";
import InfoCommentListComponent from "./info_container/InfoCommentListComponent";

//component
import Div from "layout/Div";
import InfoProfileComponent from "./info_container/InfoProfileComponent";
import InfoRecommendedListComponent from "./info_container/InfoRecommendedListComponent";
import InfoFeedTextComponent from "./info_container/InfoFeedTextComponent";

const StyledDiv = styled(Div)`
  max-width: 426px;
  min-width: 426px;
  margin-left: 52px;
`;
const MainContainer = styled.section`
  position: fixed;
  padding-right: 10px;
  max-width: 426px;
  min-width: 426px;
  margin-left: 52px;
  box-sizing: border-box;
`;

const InfoContainer = () => {
  return (
    <StyledDiv>
      <MainContainer>
        {/* 프로필 정보 */}
        <InfoProfileComponent />
        {/* 데이터 없음 */}
        <InfoRecommendedListComponent />
        {/* 댓글 */}
        <InfoCommentListComponent />
        {/* 게시글 자세히 보기 */}
        <InfoFeedTextComponent />
      </MainContainer>
    </StyledDiv>
  );
};

export default InfoContainer;
