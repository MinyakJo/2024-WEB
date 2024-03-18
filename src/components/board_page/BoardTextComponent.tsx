import React from "react";
import styled from "styled-components";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import P from "layout/P";

//icon, img
import test_profile from "../../assets/test_profile.png";

//styled
const Comment = styled(P)`
  white-space: pre-line;
  word-break: break-all;
`;
const Nickname = styled.span`
  font-family: semiBold;
  font-weight: 600;
`;

const BoardTextContainer = ({
  id,
  children,
}: {
  id?: string;
  children?: string;
}) => {
  return (
    <Div flex="row_top" marginBottom="15px">
      {/* 프로필 */}
      <Icon width="35px" radius="50%" marginRight="10px">
        <Img src={test_profile} />
      </Icon>
      {/* 댓글내용 */}
      <Div>
        <Div>
          <Comment
            fontSize="small"
            fontWeight="500"
            lineHeight="20px"
            color="900"
          >
            <Nickname>{id !== undefined ? `${id} ` : ""}</Nickname>
            {children !== undefined ? children : ""}
          </Comment>
        </Div>
        {/* 시간 */}
        <Div marginTop="3px">
          <P
            fontFamily="regular"
            fontWeight="400"
            fontSize="extra_small"
            color="500"
          >
            {}
          </P>
        </Div>
      </Div>
    </Div>
  );
};

export default BoardTextContainer;
