import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "utils/useFetch";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { feedDataListState } from "recoil/mainAtom";

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
  //state
  const [page, setPage] = useState(1);

  //recoil
  const setFeedDataList = useSetRecoilState(feedDataListState);

  //fetch
  const { data, isLoading } = useFetch({
    method: "GET",
    url: `/feeds?size=10&page=${page}`,
    headers: { Authorization: cookies.token },
  });
  useEffect(() => {
    if (data?.result) {
      setFeedDataList(data.result.feedList);
      setPage(1);
    }
  }, [data]);
  return (
    <Main>
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
