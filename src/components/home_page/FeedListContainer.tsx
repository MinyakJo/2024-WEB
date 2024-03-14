import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { feedDataListState } from "recoil/mainAtom";

//component
import Div from "layout/Div";
import FeedComponent from "./FeedComponent";

//styled
const MainContainer = styled(Div)`
  max-width: 520px;
`;

const FeedListContainer = () => {
  //recoil
  const feedDataList = useRecoilValue(feedDataListState);
  console.log(feedDataList);
  return (
    <MainContainer flex="column_center">
      {feedDataList &&
        feedDataList.map((e, i) => (
          <FeedComponent key={`feed_${e?.id}_${i}`} index={i} />
        ))}
    </MainContainer>
  );
};

export default FeedListContainer;
