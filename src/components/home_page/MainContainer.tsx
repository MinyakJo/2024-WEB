import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useFetch from "utils/useFetch";
import { useCookies } from "react-cookie";
import { useRecoilState, useRecoilValue } from "recoil";
import { feedDataListState, isMobileState } from "recoil/mainAtom";
import { throttle } from "lodash";
import { infiniteScroll } from "utils/infiniteScroll";

//component
import FeedListContainer from "./FeedListContainer";
import Div from "layout/Div";
import Loader from "layout/Loader";
import InfoContainer from "./InfoContainer";
import ShortFeedListContainer from "./ShortFeedListContainer";

//type
type MainType = {
  height?: string;
};

const Main = styled.main<MainType>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  top: 80px;
  padding: 30px 0px;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 0px;
  }

  height: ${(props) => {
    return props.height ? props.height : null;
  }};
`;

const MainContainer = () => {
  //cookie
  const [cookies] = useCookies(["token"]);

  //ref
  const ref = useRef(null);

  //state
  const [page, setPage] = useState(1);

  //recoil
  const isMobile = useRecoilValue(isMobileState);
  const [feedDataList, setFeedDataList] = useRecoilState(feedDataListState);

  //fetch
  const { data, isLoading } = useFetch({
    method: "GET",
    url: `/feeds?size=10&page=${page}`,
    headers: { Authorization: cookies.token },
    dependency: page,
  });

  //useEffect
  useEffect(() => {
    if (data?.result) {
      //feedDataList가 비어있지 않다면 병합
      if (feedDataList !== undefined) {
        setFeedDataList(feedDataList.concat(data.result.feedList));
      } else setFeedDataList(data.result.feedList);
    }
  }, [data]);

  const onScrollEvent = throttle((e: React.UIEvent<HTMLElement>) => {
    const scrollHeight = (e.target as HTMLElement).clientHeight; //한 눈에 보이는 스크롤 영역
    const scroll = (e.target as HTMLElement).scrollTop + scrollHeight; // 현재 스크롤 위치
    const mainHeight = (e.target as HTMLElement).scrollHeight; //진짜 스크롤 높이

    infiniteScroll({ scrollHeight, scroll, mainHeight, data, page, setPage });
  }, 100);
  return (
    <Main
      ref={ref}
      onScroll={onScrollEvent}
      height={!isMobile ? "calc(100% - 80px)" : "calc(100% - 141px)"}
    >
      {/* 게시물 */}
      <Div
        width="fit-content"
        flex="column_center"
        paddingLeft="10px"
        marginRight={!isMobile ? "104px" : undefined}
      >
        <ShortFeedListContainer />
        <FeedListContainer />
        {isLoading && (
          <Div flex="row_center" height="100%">
            <Loader width="10px" />
          </Div>
        )}
      </Div>
      {/* 오른쪽 프로필 정보 및 게시글, 댓글 */}
      {!isMobile && <InfoContainer />}
    </Main>
  );
};

export default MainContainer;
