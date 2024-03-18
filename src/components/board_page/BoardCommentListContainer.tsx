import React, { useEffect, useState } from "react";
import CommonStyle from "components/style";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardCommentListState, commentPageState } from "recoil/boardAtom";
import { useCookies } from "react-cookie";
import { fetch } from "apis/fetch";
import { feedDataListState, selectedFeedIndexState } from "recoil/mainAtom";
import { throttle } from "lodash";
import { infiniteScroll } from "utils/infiniteScroll";

//component
import Div from "layout/Div";
import Loader from "layout/Loader";
import BoardTextComponent from "./BoardTextComponent";

const CommentContainer = styled(Div)`
  border-top: 0.5px solid ${CommonStyle.setColor("300")};
  border-bottom: 0.5px solid ${CommonStyle.setColor("300")};
  overflow: hidden auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const BoardCommentListContainer = () => {
  //cookie
  const [cookies] = useCookies(["token"]);
  const header = { Authorization: cookies.token };

  //state
  const [isLoading, setIsLoading] = useState(false);

  //recoil
  const [commentList, setCommentList] = useRecoilState(boardCommentListState);
  const index = useRecoilValue(selectedFeedIndexState);
  const feedDataList = useRecoilValue(feedDataListState);
  const [page, setPage] = useRecoilState(commentPageState);

  //fetch
  const fetchData = async () => {
    setIsLoading(true);

    if (index !== undefined && feedDataList !== undefined) {
      const fetchData = await fetch({
        method: "GET",
        url: `/feeds/${feedDataList[index].id}/comments?size=3&page=${page}`,
        headers: header,
      });

      if (fetchData.data.result !== undefined) {
        setCommentList(fetchData.data.result.commentList);
        setIsLoading(false);
      }
    }
  };

  //useEffect
  useEffect(() => {
    fetchData();
  }, [index, page]);

  const onScrollEvent = throttle((e: React.UIEvent<HTMLElement>) => {
    const scrollHeight = (e.target as HTMLElement).clientHeight; //한 눈에 보이는 스크롤 영역
    const scroll = (e.target as HTMLElement).scrollTop + scrollHeight; // 현재 스크롤 위치
    const mainHeight = (e.target as HTMLElement).scrollHeight; //진짜 스크롤 높이

    infiniteScroll({
      scrollHeight,
      scroll,
      mainHeight,
      data: commentList,
      page,
      setPage,
    });
  }, 100);
  console.log(commentList);

  return (
    <CommentContainer
      height="471px"
      padding="0px 15px"
      onScroll={onScrollEvent}
    >
      {!isLoading ? (
        <Div paddingTop="15px">
          <Div marginBottom="30px">
            {index !== undefined && feedDataList !== undefined && (
              <BoardTextComponent id={feedDataList[index].feedLoginId}>
                {feedDataList[index].feedText}
              </BoardTextComponent>
            )}
          </Div>
          {commentList &&
            commentList.map((e, i) => (
              <BoardTextComponent
                key={`board_comment_${i}`}
                id={e?.writeUserLoginId}
              >
                {e?.commentText}
              </BoardTextComponent>
            ))}
        </Div>
      ) : (
        <Div flex="row_center" height="100%">
          <Loader width="10px" />
        </Div>
      )}
    </CommentContainer>
  );
};

export default BoardCommentListContainer;
