import React from "react";
import { useRecoilValue } from "recoil";
import { feedDataListState, selectedFeedIndexState } from "recoil/mainAtom";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import P from "layout/P";
import { createdAtFormat } from "utils/createdAtFormat";

//icon
import heart_icon from "../../assets/selected_heart_icon.svg";
import text_ballon_icon from "../../assets/text_ballon_icon.svg";
import bookmark_icon from "../../assets/bookmark_icon.svg";

const BoardButtonComponent = () => {
  //recoil
  const feedDataList = useRecoilValue(feedDataListState);
  const index = useRecoilValue(selectedFeedIndexState);

  return (
    <Div padding="15px">
      {/* 좋아요, 댓글, 구독 */}
      <Div flex="row_between">
        {/* 좋아요, 댓글 */}
        <Div width="fit-content" flex="row">
          <Icon width="24px" marginRight="15px">
            <Img src={heart_icon} />
          </Icon>
          <Icon width="24px">
            <Img src={text_ballon_icon} />
          </Icon>
        </Div>
        <Icon width="24px">
          <Img src={bookmark_icon} />
        </Icon>
      </Div>
      {/* 좋아요 */}
      <Div marginTop="10px">
        <P
          color="900"
          fontSize="small"
          fontFamily="bold"
          fontWeight="700"
          lineHeight="20px"
        >
          좋아요
        </P>
      </Div>
      {/* 시간 */}
      <Div marginTop="5px">
        <P
          color="300"
          fontSize="extra_small"
          fontWeight="500"
          lineHeight="18px"
        >
          {index !== undefined && feedDataList !== undefined
            ? createdAtFormat(new Date(feedDataList[index].createdAt as string))
            : ""}
        </P>
      </Div>
    </Div>
  );
};

export default BoardButtonComponent;
