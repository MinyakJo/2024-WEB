import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
// import { boardIdState } from "recoil/boardAtom";
import CommonStyle from "components/style";
import { useLocation } from "react-router-dom";
// import QueryString from "qs";
import BoardInfoContainer from "components/board_page/BoardInfoContainer";
import {
  feedDataListState,
  nowPageNameState,
  selectedFeedIndexState,
} from "recoil/mainAtom";
import { boardCommentListState, commentPageState } from "recoil/boardAtom";

//component
import Div from "layout/Div";
import Slider from "layout/Slider";

//styled
const Main = styled.main`
  ${CommonStyle.setFlex("row_center")};
  position: relative;
  width: 100%;
  height: 100%;
  background: #00000066;
  padding: 50px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;
const BoardContainer = styled(Div)`
  overflow: hidden;
  max-width: 1072px;
`;
const SliderContainer = styled(Div)`
  position: relative;
`;

const BoardPage = () => {
  //useLocation
  const { search } = useLocation();

  //recoil
  // const [boardId, setBoardId] = useRecoilState(boardIdState);
  const index = useRecoilValue(selectedFeedIndexState);
  const feedDataList = useRecoilValue(feedDataListState);
  const setNowPageName = useSetRecoilState(nowPageNameState);
  const resetBoardCommentList = useResetRecoilState(boardCommentListState);
  const resetCommentPage = useResetRecoilState(commentPageState);
  const resetFeedDataList = useResetRecoilState(feedDataListState);

  //useEffect
  useEffect(() => {
    setNowPageName("board");
    if (search !== undefined || search !== "") {
      //쿼리 스트링을 읽어와서 recoil 등록
      // const id = QueryString.parse(search, { ignoreQueryPrefix: true });
      // setBoardId(Number(id.boardId));
    }

    return () => {
      resetBoardCommentList();
      resetCommentPage();
      resetFeedDataList();
    };
  }, [search, resetBoardCommentList, resetCommentPage, resetFeedDataList]);

  return (
    <Main>
      <BoardContainer
        flex="row_top"
        radius="10px"
        backgroundColor="white"
        height="698px"
      >
        <SliderContainer height="100%" backgroundColor="black">
          {index !== undefined && feedDataList !== undefined && (
            <Slider dots="in">{feedDataList[index].contentList}</Slider>
          )}
        </SliderContainer>
        <BoardInfoContainer />
      </BoardContainer>
    </Main>
  );
};

export default BoardPage;
