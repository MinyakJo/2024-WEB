import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { boardImgListState, boardPreviewListState } from "recoil/dialogAtom";
import { setFileList } from "utils/setFileList";
import { throttle } from "lodash";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Button from "layout/Button";
import H2 from "layout/H2";
import Loader from "layout/Loader";

//icon, img
import post_icon from "../../../assets/img_post_icon.svg";

//styled
const InputContainer = styled(Div)`
  position: relative;
  input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
  button {
    position: relative;
    z-index: 6;
  }
`;

const InputFile = () => {
  //useRef
  const ref = useRef<HTMLInputElement>(null);

  //state
  const [isLoading, setIsLoading] = useState(true);

  //recoil
  const setFile = useSetRecoilState(boardImgListState);
  const [preview, setPreview] = useRecoilState(boardPreviewListState);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "file":
        if (ref.current !== null) ref.current.click();
        return;
      default:
        return;
    }
  };
  const onChangeEvent = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target !== null) {
      await setFileList({
        files: target.files,
        set: setFile,
        setPreview: setPreview,
      });
    }
  };
  const onDragOverEvent = throttle((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, 200);
  const onDragLeaveEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onDragDropEvent = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    await setFileList({
      files: e.dataTransfer.files,
      set: setFile,
      setPreview: setPreview,
    });
  };
  const onLoadEvent = () => {
    setIsLoading(false);
  };
  return (
    <InputContainer
      flex="column_center"
      height="calc(100% - 61px)"
      onClick={onClickEvent}
      onDragOver={onDragOverEvent}
      onDragLeave={onDragLeaveEvent}
      onDrop={onDragDropEvent}
    >
      {preview === undefined ? (
        <>
          <Icon width="95px">
            <Img src={post_icon} />
          </Icon>
          <Div width="fit-content" marginTop="20px">
            <H2
              color="500"
              fontSize="extra_large"
              fontWeight="500"
              lineHeight="32px"
            >
              사진과 동영상을 여기에 끌어다 놓으세요
            </H2>
          </Div>
          <Div
            marginTop="30px"
            width="130px"
            height="35px"
            backgroundColor="blue"
            radius="5px"
          >
            <Button
              id="file"
              color="white"
              fontWeight="600"
              fontFamily="semiBold"
              lineHeight="24px"
              fontSize="medium"
            >
              컴퓨터에서 선택
            </Button>
          </Div>
          <input
            type="file"
            ref={ref}
            onChange={onChangeEvent}
            accept="image/png, image/jpeg, image/webp, image/jpg"
            multiple={true}
          />
        </>
      ) : (
        <>
          <Div flex="column_center" height="100%" backgroundColor="black">
            <Img
              src={preview !== undefined ? preview[0] : undefined}
              onLoad={onLoadEvent}
              height={!isLoading ? "100%" : "0px"}
            />
            {isLoading && (
              <Div flex="row_center" height="100%">
                <Loader width="10px" backgroundColor="white" />
              </Div>
            )}
          </Div>
          <input
            type="file"
            ref={ref}
            onChange={onChangeEvent}
            accept="image/png, image/jpeg, image/webp, image/jpg"
            multiple={true}
          />
        </>
      )}
    </InputContainer>
  );
};

export default InputFile;
