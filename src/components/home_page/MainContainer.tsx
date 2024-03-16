import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useFetch from "utils/useFetch";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { feedDataListState } from "recoil/mainAtom";
import { scrollLoad } from "utils/scrollLoad";
import { throttle, debounce } from "lodash";

//component
import FeedListContainer from "./FeedListContainer";
import Div from "layout/Div";
import Loader from "layout/Loader";
import InfoContainer from "./InfoContainer";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: calc(100% - 80px);
  top: 80px;
  padding: 30px 0px;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const MainContainer = () => {
  //cookie
  const [cookies] = useCookies(["token"]);

  //ref
  const ref = useRef(null);

  //state
  const [page, setPage] = useState(1);

  //recoil
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

  const onScrollEvent = throttle((e: React.MouseEvent<HTMLElement>) => {
    const scrollHeight = (e.target as HTMLElement).clientHeight; //한 눈에 보이는 스크롤 영역
    const scroll = (e.target as HTMLElement).scrollTop + scrollHeight; // 현재 스크롤 위치
    const mainHeight = (e.target as HTMLElement).scrollHeight; //진짜 스크롤 높이

    //데이터가 있다면
    if (data?.result) {
      if (
        scrollLoad({ scroll, scrollHeight, mainHeight }) &&
        page < data.result.lastPage
      ) {
        // setPage 중복 방지
        const debounceSetPage = debounce(() => {
          setPage(page + 1);
        }, 100);
        debounceSetPage();
      }
    }
  }, 100);
  return (
    <Main ref={ref} onScroll={onScrollEvent}>
      {/* 게시물 */}
      <Div
        width="fit-content"
        flex="column_center"
        paddingLeft="10px"
        marginRight="52px"
      >
        <FeedListContainer />
        {isLoading && (
          <Div flex="row_center" height="100%">
            <Loader width="10px" />
          </Div>
        )}
      </Div>
      {/* 오른쪽 프로필 정보 및 게시글, 댓글 */}
      <InfoContainer />
    </Main>
  );
};

export default MainContainer;
