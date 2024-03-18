import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { fetch } from "apis/fetch";
import { debounce } from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  commentDataListState,
  commentLayoutIsOpenState,
  feedDataListState,
} from "recoil/mainAtom";

//component
import Div from "layout/Div";
import CommentInputComponent from "components/CommentInputComponent";

import test_profile from "../../../assets/test_profile.png";

const FeedCommentComponent = ({
  children,
  index,
}: {
  children: any;
  index: number;
}) => {
  //cookie
  const [cookies] = useCookies(["token"]);
  const headers = { Authorization: cookies.token };

  //state
  const [input, setInput] = useState("");

  //recoil
  const setData = useSetRecoilState(commentDataListState);
  const [feedDataList, setFeedDataList] = useRecoilState(feedDataListState);
  const setIsOpen = useSetRecoilState(commentLayoutIsOpenState);

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
  //fuction
  const postAfterSet = async () => {
    if (children !== undefined) {
      await fetch({
        method: "POST",
        url: `/feeds/${children.id}/comment`,
        data: {
          commentText: input,
        },
        headers: headers,
      });
      const afterFetch = await fetch({
        method: "GET",
        url: `/feeds/${feedDataList[index].id}/comments?size=3&page=1`,
        headers: headers,
      });
      // 전송 후 fetch 설정
      if (afterFetch.data !== undefined) {
        setData(afterFetch.data.result.commentList);
      }
      if (feedDataList !== undefined && feedDataList[index] !== undefined) {
        const list = [...feedDataList];

        if (feedDataList[index].feedCommentCount !== undefined) {
          const commentCount = feedDataList[index].feedCommentCount as number;
          list.splice(index, 1, {
            ...feedDataList[index],
            feedCommentCount: commentCount + 1,
          });
          //댓글이 3개 넘어가면 댓글 레이아웃 닫기
          if (commentCount + 1 > 2) {
            setIsOpen(false);
          }
        }
        setFeedDataList(list);
      }
    }

    setInput("");
  };

  return (
    <Div height="60px" onClick={onClickEvent}>
      <CommentInputComponent
        value={input}
        profile={test_profile}
        onChange={onChangeEvent}
        onKeyUp={onKeyUpEvent}
      />
    </Div>
  );
};

export default FeedCommentComponent;
