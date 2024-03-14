import React from "react";
import { feedDataListState } from "recoil/mainAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import CommonStyle from "components/style";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import P from "layout/P";
import Button from "layout/Button";

//img, icon
import heart_icon from "../../assets/selected_heart_icon.svg";
import text_ballon_icon from "../../assets/text_ballon_icon.svg";
import bookmark_icon from "../../assets/bookmark_icon.svg";

//styled
const CommentContainer = styled(Div)`
  p,
  button {
    font-size: ${CommonStyle.setFontSize("small")};
    line-height: 20px;
  }
`;
const Comment = styled(P)`
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: pre-line;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const FeedButtonsComponent = ({ index }: { index: number }) => {
  const feedData = useRecoilValue(feedDataListState);

  return (
    <Div padding="20px 15px">
      {/* 버튼 아이콘 */}
      <Div flex="row_between">
        {/* 하트, 말풍선 아이콘 */}
        <Div flex="row" width="fit-content">
          <Icon width="24px" marginRight="15px">
            <Img src={heart_icon} id={`like_${index}`} />
          </Icon>
          <Icon width="24px">
            <Img src={text_ballon_icon} id={`text_${index}`} />
          </Icon>
        </Div>
        {/* 사진 갯수, 현재위치 */}
        <Div></Div>
        {/* 북마크 */}
        <Div width="fit-content">
          <Icon width="24px">
            <Img src={bookmark_icon} id={`bookmark_${index}`} />
          </Icon>
        </Div>
      </Div>
      {/* 좋아요, 댓글, 댓글 더보기, 시간 */}
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
            {`좋아요`}
          </P>
        </Div>
        {/* 댓글 */}
        <CommentContainer flex="row">
          {/* 닉네임 */}
          <Div width="fit-content" marginRight="5px">
            <P fontWeight="700" color="900" fontFamily="bold">
              {feedData[index].feedLoginId}
            </P>
          </Div>
          {/* 작성내용 */}
          <Div width="40px">
            <Comment fontWeight="500">테스트댓글댓글댓글댓글</Comment>
          </Div>
          {/* 더보기 */}
          <Div width="fit-content">
            <Button color="500">더보기</Button>
          </Div>
        </CommentContainer>
        {/* 댓글 더보기 */}
        <Div width="fit-content" marginTop="5px">
          <Button
            color="#999999"
            fontWeight="500"
            fontSize="small"
            lineHeight="20px"
          >
            {`댓글 ${feedData[index].feedCommentCount}개 모두보기`}
          </Button>
        </Div>
      </Div>
    </Div>
  );
};
export default FeedButtonsComponent;
