import React, { useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { feedDataListState, selectedFeedIndexState } from "recoil/mainAtom";
import { fetch } from "apis/fetch";
import { useCookies } from "react-cookie";
import { boardCommentListState, commentPageState } from "recoil/boardAtom";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import H1 from "layout/H1";
import BoardCommentListContainer from "./BoardCommentListContainer";
import CommentInputComponent from "components/CommentInputComponent";
import BoardButtonComponent from "./BoardButtonComponent";

//img, icon
import test_profile from "../../assets/test_profile.png";
import more_icon from "../../assets/board_more_icon.svg";

//styled
const MainContainer = styled(Div)`
  max-width: 374px;
  min-width: 374px;
`;

const BoardInfoContainer = () => {
  //cookie
  const [cookies] = useCookies(["token"]);
  const header = { Authorization: cookies.token };

  //state
  const [input, setInput] = useState("");

  //recoil
  const [feedDataList, setFeedDataList] = useRecoilState(feedDataListState);
  const index = useRecoilValue(selectedFeedIndexState);
  const setCommentList = useSetRecoilState(boardCommentListState);
  const setPage = useSetRecoilState(commentPageState);

  //event
  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "upload":
        await postAfterSet();
        return;
      default:
        return;
    }
  };
  const onKeyUpEvent = debounce(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") {
        await postAfterSet();
      }
    },
    100
  );
  //function
  const postAfterSet = async () => {
    if (index !== undefined && feedDataList !== undefined) {
      await fetch({
        method: "POST",
        url: `/feeds/${feedDataList[index].id}/comment`,
        data: {
          commentText: input,
        },
        headers: header,
      });
      const afterFetch = await fetch({
        method: "GET",
        url: `/feeds/${feedDataList[index].id}/comments?size=3&page=1`,
        headers: header,
      });

      //page 초기화
      setPage(1);
      // 전송 후 fetch 설정
      if (afterFetch.data !== undefined) {
        console.log(afterFetch.data.result);
        setCommentList(afterFetch.data.result.commentList);
      }
      if (feedDataList !== undefined && index !== undefined) {
        const list = [...feedDataList];

        if (feedDataList[index].feedCommentCount !== undefined) {
          const commentCount = feedDataList[index].feedCommentCount as number;
          list.splice(index, 1, {
            ...feedDataList[index],
            feedCommentCount: commentCount + 1,
          });
        }
        setFeedDataList(list);
      }
    }

    setInput("");
  };

  return (
    <MainContainer onClick={onClickEvent}>
      {/* 작성자 프로필 */}
      <Div flex="row_between" padding="15px" marginRight="10px">
        <Div flex="row">
          {/* 프로필 사진 */}
          <Icon width="35px" radius="50%" marginRight="10px">
            <Img src={test_profile} />
          </Icon>
          {/* 아이디 */}
          <Div width="fit-content" marginRight="10px">
            <H1
              color="900"
              fontFamily="semiBold"
              fontWeight="600"
              fontSize="medium"
              lineHeight="24px"
            >
              {index !== undefined && feedDataList[index]?.feedLoginId
                ? feedDataList[index].feedLoginId
                : ""}
            </H1>
          </Div>
        </Div>
        {/* 더보기 아이콘 */}
        <Icon width="24px">
          <Img src={more_icon} />
        </Icon>
      </Div>
      {/* 댓글 리스트 */}
      <BoardCommentListContainer />
      {/* 버튼 */}
      <BoardButtonComponent />
      {/* 댓글 쓰기 */}
      <Div height="50px">
        <CommentInputComponent
          value={input}
          onChange={onChangeEvent}
          onKeyUp={onKeyUpEvent}
        />
      </Div>
    </MainContainer>
  );
};

export default BoardInfoContainer;
