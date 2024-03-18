import React from "react";
import CommonStyle from "components/style";
import styled from "styled-components";

//component
import Div from "layout/Div";
import Img from "layout/Img";
import Icon from "layout/Icon";
import Slider from "layout/Slider";

//img
import default_user from "../../../assets/test_profile.png";
import more_circle_icon from "../../../assets/more_circle_icon.svg";

//styled
const FeedImgContainer = styled(Div)`
  ${CommonStyle.setColor("row")};
  position: relative;
  aspect-ratio: 1/1;
`;
const Overlay = styled(Div)`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  padding: 19px 15px;
  z-index: 2;
`;
const ProfileName = styled.h3`
  font-weight: 600;
  font-size: ${CommonStyle.setFontSize("medium")};
  line-height: 24px;
  font-family: semiBold;
  color: white;
  cursor: pointer;
`;

const FeedImg = ({ children }: { children: any }) => {
  return (
    <FeedImgContainer>
      <Overlay id="to">
        {/* 프로필 사진, 이름, 더보기 */}
        <Div flex="row_between">
          <Div flex="row">
            {/* 프로필 사진 */}
            <Icon width="35px" radius="50%" marginRight="5px">
              <Img src={default_user} />
            </Icon>
            {/* 이름 */}
            <Div width="fit-content">
              <ProfileName>{children?.feedLoginId}</ProfileName>
            </Div>
          </Div>
          {/* 더보기 */}
          <Icon width="24px">
            <Img src={more_circle_icon} />
          </Icon>
        </Div>
      </Overlay>
      <Slider dots>{children?.contentList}</Slider>
    </FeedImgContainer>
  );
};

export default FeedImg;
