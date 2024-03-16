import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommonStyle from "components/style";

//compnent
import Div from "layout/Div";
import Img from "layout/Img";
import Loader from "layout/Loader";
import Icon from "./Icon";
import Button from "./Button";

//icon.img
import slide_button_icon from "../assets/slide_right_button.svg";

//type
type SliderType = {
  left?: string;
};
type SliderBoxType = {
  translateX?: string;
};
type slideButtonType = {
  opacity?: string;
  hoverOpacity?: string;
  top?: string;
  right?: string;
  left?: string;
  transform?: string;
};
type propsType = {
  children?: {
    id?: number;
    contentUrl?: string;
  }[];
  dots?: boolean;
};

//styled
const SlideContainer = styled(Div)`
  overflow: hidden;
  position: relative;
`;

const SlideBox = styled(Div)<SliderBoxType>`
  white-space: nowrap;
  width: 100%;
  height: 100%;
  transform: ${(props) => {
    return props.translateX ? `translateX(${props.translateX})` : null;
  }};

  transition: transform 0.5s;
`;

const Slide = styled(Div)<SliderType>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: ${(props) => {
    return props.left ? props.left : null;
  }};
`;
const SliderButton = styled(Div)<slideButtonType>`
  ${CommonStyle.setFlex("row_center")};
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  background-color: black;
  padding: 5px;
  aspect-ratio: 1/1;
  border-radius: 50%;

  min-width: ${(props) => {
    return props.width ? props.width : null;
  }};
  opacity: ${(props) => {
    return props.opacity ? props.opacity : null;
  }};
  right: ${(props) => {
    return props.right ? props.right : null;
  }};
  left: ${(props) => {
    return props.left ? props.left : null;
  }};
  img {
    transform: ${(props) => {
      return props.transform ? props.transform : null;
    }};
  }

  :hover {
    opacity: ${(props) => {
      return props.hoverOpacity ? props.hoverOpacity : null;
    }};
  }
`;
const Dots = styled(Div)`
  position: absolute;
  bottom: -29px;
`;

const Slider = ({ children, dots }: propsType) => {
  //state
  const [imgList, setImgList] = useState<any[]>([]);
  //이미지 로딩동안 나타내기 위한 state
  const [imgLoad, setImgLoad] = useState<boolean[]>([]);
  //이미지 슬라이드 위치
  const [imgIndex, setImgIndex] = useState(0);

  //useEffect
  useEffect(() => {
    if (children !== undefined) {
      const list: boolean[] = [];

      for (let i = 0; i < children.length; i++) {
        list.push(false);
      }
      setImgLoad(list);
      setImgList(children);
    }
  }, []);

  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    const type = id.split("_")[0];

    switch (type) {
      case "next":
        if (imgIndex + 1 < imgList.length) setImgIndex(imgIndex + 1);
        return;
      case "prev":
        if (imgIndex > 0) setImgIndex(imgIndex - 1);
        return;
      case "slide":
        const index = Number(id.split("_")[1]);

        if (!isNaN(index)) setImgIndex(index);
        return;
      default:
        return;
    }
  };
  //event
  const onLoadEvent = (index: number) => {
    const list = [...imgLoad];
    list.splice(index, 1, true);
    setImgLoad(list);
  };

  return (
    <React.Fragment>
      <SlideContainer
        flex="row_center"
        width="100%"
        height="100%"
        onClick={onClickEvent}
      >
        <SliderButton
          width="30px"
          left="15px"
          transform="rotate(180deg)"
          opacity={imgIndex === 0 ? "0.2" : "0.5"}
          hoverOpacity={imgIndex === 0 ? "0.2" : "0.8"}
        >
          <Img src={slide_button_icon} id="prev" />
        </SliderButton>
        <SlideBox translateX={`calc( 100% * -${imgIndex} )`}>
          {imgList &&
            imgList.map((e, i) => (
              <Slide key={`feed_img_${e.id}_${i}`} left={`calc(100% * ${i})`}>
                {/* 이미지 */}
                <Div
                  height={!imgLoad[i] ? "0px" : "100%"}
                  backgroundColor="black"
                >
                  <Img
                    width="none"
                    height={imgLoad[i] ? "100%" : "0px"}
                    onLoad={() => onLoadEvent(i)}
                    src={e?.contentUrl}
                    fit="cover"
                  />
                </Div>
                {/* 이미지 로딩 될때까지의 로딩 */}
                {!imgLoad[i] && (
                  <Div height="100%" flex="row_center">
                    <Loader
                      key={`feed_loading_img_${e?.id}_${i}`}
                      width="10px"
                    />
                  </Div>
                )}
              </Slide>
            ))}
        </SlideBox>
        <SliderButton
          width="30px"
          right="15px"
          opacity={imgIndex + 1 < imgList.length ? "0.5" : "0.3"}
          hoverOpacity={imgIndex + 1 < imgList.length ? "0.8" : "0.3"}
        >
          <Img src={slide_button_icon} id="next" />
        </SliderButton>
      </SlideContainer>
      {dots && (
        <Dots flex="row_center" onClick={onClickEvent}>
          {imgList &&
            imgList.map((e, i) => (
              <Icon
                key={`feed_img_${e.id}_dots_${i}`}
                width="5px"
                radius="50%"
                marginLeft="1px"
                marginRight="1px"
                backgroundColor={i === imgIndex ? "#2F80ED" : "#E0E0E0"}
              >
                <Button id={`slide_${i}`} />
              </Icon>
            ))}
        </Dots>
      )}
    </React.Fragment>
  );
};

export default React.memo(Slider);
