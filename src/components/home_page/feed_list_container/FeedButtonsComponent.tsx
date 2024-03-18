import React from "react";
import {
  commentLayoutIsOpenState,
  feedLayoutIsOpenState,
  selectedFeedIdState,
  selectedFeedIndexState,
} from "recoil/mainAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import CommonStyle from "components/style";
import { createdAtFormat } from "utils/createdAtFormat";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import P from "layout/P";
import Button from "layout/Button";

//img, icon
import heart_icon from "../../../assets/selected_heart_icon.svg";
import text_ballon_icon from "../../../assets/text_ballon_icon.svg";
import bookmark_icon from "../../../assets/bookmark_icon.svg";

//styled
const TextContainer = styled(Div)`
  p,
  button {
    font-size: ${CommonStyle.setFontSize("small")};
    line-height: 20px;
  }
`;
const LongText = styled(P)`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: pre-line;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const Text = styled(P)`
  word-wrap: break-word;
  white-space: pre-line;
`;

const FeedButtonsComponent = ({
  children,
  index,
}: {
  children: any;
  index: number;
}) => {
  //recoil
  const [commentLayOutIsOpen, setCommentLayoutIsOpen] = useRecoilState(
    commentLayoutIsOpenState
  );
  const [feedLayOutIsOpen, setFeedLayoutIsOpen] = useRecoilState(
    feedLayoutIsOpenState
  );
  const [selectedFeedId, setSelectedFeedId] =
    useRecoilState(selectedFeedIdState);
  const setSelectedFeedIndex = useSetRecoilState(selectedFeedIndexState);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    const type = id.split("_")[0];

    switch (type) {
      case "like":
        return;
      case "comment":
        if (id.split("_")[1] === "open") {
          setIdAndOpen(
            commentLayOutIsOpen,
            setCommentLayoutIsOpen,
            setFeedLayoutIsOpen
          );
        } else {
        }
        return;
      case "bookmark":
        return;
      case "feed":
        setIdAndOpen(
          feedLayOutIsOpen,
          setFeedLayoutIsOpen,
          setCommentLayoutIsOpen
        );
        return;
      default:
        return;
    }
  };

  const setIdAndOpen = (
    isOpen: boolean,
    setIsOpen: any,
    otherSetIsOpen: any
  ) => {
    if (selectedFeedId !== undefined) {
      //만일 선택된 id가 다르다면
      if (children.id !== selectedFeedId) {
        //다른창 닫기
        otherSetIsOpen(false);
      }
    }
    //피드 id 등록
    setSelectedFeedId(children.id);
    //피드 인덱스 등록
    setSelectedFeedIndex(index);
    //레이아웃 오픈 여부
    setIsOpen(!isOpen);
  };

  return (
    <Div padding="20px 15px" onClick={onClickEvent}>
      {/* 버튼 아이콘 */}
      <Div flex="row_between">
        {/* 하트, 말풍선 아이콘 */}
        <Div flex="row" width="fit-content">
          <Icon width="24px" marginRight="15px">
            <Img src={heart_icon} id={`like_${children?.id}`} />
          </Icon>
          <Icon width="24px">
            <Img
              src={text_ballon_icon}
              id={
                (children.feedCommentCount as number) < 3
                  ? "comment_open"
                  : "comment_to"
              }
            />
          </Icon>
        </Div>
        {/* 사진 갯수, 현재위치 */}
        <Div></Div>
        {/* 북마크 */}
        <Div width="fit-content">
          <Icon width="24px">
            <Img src={bookmark_icon} id={`bookmark_${children?.id}`} />
          </Icon>
        </Div>
      </Div>
      {/* 좋아요, 작성내용, 댓글 더보기, 시간 */}
      <Div marginTop="15px">
        {/* 좋아요 */}
        <Div>
          <P
            fontFamily="bold"
            fontSize="small"
            fontWeight="700"
            lineHeight="20px"
            color="900"
          >
            {/* 좋아요 데이터를 안줌 */}
            {`좋아요 0개`}
          </P>
        </Div>
        {/* 작성내용 */}
        <TextContainer flex="row_top">
          {/* 닉네임 */}
          <Div width="fit-content" marginRight="5px">
            <P fontWeight="700" color="900" fontFamily="bold">
              {children?.feedLoginId ? children.feedLoginId : ""}
            </P>
          </Div>
          {/* 내용 */}
          {(children?.feedText as string).length +
            (children?.feedLoginId as string).length >
          100 ? (
            <>
              <Div width="40px">
                <LongText fontWeight="500">
                  {children?.feedText ? children.feedText : ""}
                </LongText>
              </Div>
              {/* 더보기 */}
              <Div width="fit-content">
                <Button color="500" id="feed_open">
                  더보기
                </Button>
              </Div>
            </>
          ) : (
            <Div>
              <Text>{children?.feedText ? children.feedText : ""}</Text>
            </Div>
          )}
        </TextContainer>
        {/* 댓글 더보기 */}
        <Div width="fit-content" marginTop="5px">
          <Button
            id={
              (children?.feedCommentCount as number) < 3
                ? "comment_open"
                : "comment_to"
            }
            color="#999999"
            fontWeight="500"
            fontSize="small"
            lineHeight="20px"
          >
            {`댓글 ${
              children?.feedCommentCount ? children.feedCommentCount : 0
            }개 모두보기`}
          </Button>
        </Div>
        {/* 작성 시간 */}
        <Div width="fit-content" marginTop="10px">
          <Button
            fontWeight="500"
            fontSize="extra_small"
            lineHeight="20px"
            color="300"
          >
            {createdAtFormat(new Date(children?.createdAt as string))}
          </Button>
        </Div>
      </Div>
    </Div>
  );
};
export default FeedButtonsComponent;
