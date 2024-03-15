import React, { useEffect, useState } from "react";
import CommonStyle from "components/style";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { feedDataListState } from "recoil/mainAtom";

//component
import Div from "layout/Div";
import Img from "layout/Img";
import Icon from "layout/Icon";
import Loader from "layout/Loader";

//img
import default_user from "../../../assets/test_profile.png";
import more_circle_icon from "../../../assets/more_circle_icon.svg";

//styled
const FeedImgContainer = styled(Div)`
  ${CommonStyle.setColor("row")};
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;
const Overlay = styled(Div)`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  padding: 19px 15px;
`;
const ProfileName = styled.h3`
  font-weight: 600;
  font-size: ${CommonStyle.setFontSize("medium")};
  line-height: 24px;
  font-family: semiBold;
  color: white;
  cursor: pointer;
`;

const FeedImg = ({ index }: { index: number }) => {
  //recoil
  const data = useRecoilValue(feedDataListState);

  //state
  const [imgList, setImgList] = useState<any[]>([]);
  //이미지 로딩동안 나타내기 위한 state
  const [imgLoad, setImgLoad] = useState<boolean[]>([]);

  //useEffect
  useEffect(() => {
    if (data[index]?.contentList) {
      const list: boolean[] = [];

      for (let i = 0; i < data[index].contentList.length; i++) {
        list.push(false);
      }
      setImgLoad(list);
      setImgList(data[index].contentList);
    }
  }, [data]);

  //event
  const onLoadEvent = (index: number) => {
    const list = [...imgLoad];
    list.splice(index, 1, true);
    setImgLoad(list);
  };
  return (
    <FeedImgContainer>
      <Overlay>
        {/* 프로필 사진, 이름, 더보기 */}
        <Div flex="row_between">
          <Div flex="row">
            {/* 프로필 사진 */}
            <Icon width="35px" radius="50%" marginRight="5px">
              <Img src={default_user} />
            </Icon>
            {/* 이름 */}
            <Div width="fit-content">
              <ProfileName>{data[index]?.feedLoginId}</ProfileName>
            </Div>
          </Div>
          {/* 더보기 */}
          <Icon width="24px">
            <Img src={more_circle_icon} />
          </Icon>
        </Div>
      </Overlay>
      {imgList &&
        imgList.map((e, i) => (
          <React.Fragment key={`feed_img_${e?.id}_${i}`}>
            {/* 이미지 */}
            <Img
              width={imgLoad[i] ? "100%" : "0px"}
              onLoad={() => onLoadEvent(i)}
              src={e?.contentUrl}
            />
            {/* 이미지 로딩 될때까지의 로딩 */}
            {!imgLoad[i] && (
              <Div flex="row_center" height="100%">
                <Loader key={`feed_loading_img_${e?.id}_${i}`} width="10px" />
              </Div>
            )}
          </React.Fragment>
        ))}
    </FeedImgContainer>
  );
};

export default FeedImg;
