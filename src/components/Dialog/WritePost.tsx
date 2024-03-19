import React, { useEffect } from "react";
import styled from "styled-components";
import CommonStyle from "components/style";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  boardImgListState,
  boardPreviewListState,
  boardTextState,
  dialogState,
  nowBoardIndexState,
} from "recoil/dialogAtom";
import { fetch } from "apis/fetch";
import { useCookies } from "react-cookie";

//component
import Div from "layout/Div";
import H1 from "layout/H1";
import InputFile from "./write_post/InputFile";
import Button from "layout/Button";
import Img from "layout/Img";
import Icon from "layout/Icon";
import InputText from "./write_post/InputText";

//icon
import back_icon from "../../assets/post_back_icon.svg";
import { uploadToFirebase } from "utils/uploadToFirebase";

const MainContainer = styled(Div)`
  max-width: 1008px;
`;
const TitleContainer = styled(Div)`
  border-bottom: 0.5px solid ${CommonStyle.setColor("300")};
`;

const WritePost = () => {
  //cookie
  const [cookies] = useCookies(["token", "loginId"]);
  const header = { Authorization: cookies.token };

  //recoil
  const [nowBoardIndex, setNowBoardIndex] = useRecoilState(nowBoardIndexState);
  const fileList = useRecoilValue(boardImgListState);
  const [dialog, setDialog] = useRecoilState(dialogState);
  const text = useRecoilValue(boardTextState);

  const resetFile = useResetRecoilState(boardImgListState);
  const resetPreview = useResetRecoilState(boardPreviewListState);
  const resetIndex = useResetRecoilState(nowBoardIndexState);
  const resetText = useResetRecoilState(boardTextState);
  const reset = useResetRecoilState(dialogState);

  //useEffect
  useEffect(() => {
    return () => {
      resetFile();
      resetPreview();
      resetIndex();
      resetText();
    };
  }, [resetFile, resetPreview, resetIndex, resetText]);

  //event
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    const type = id.split("_")[0];

    switch (type) {
      case "post":
        const button = id.split("_")[1];
        if (button === "next") {
          setNowBoardIndex(nowBoardIndex + 1);
        } else if (button === "prev") {
          const copyDialog = [...dialog];
          copyDialog.push({
            type: "notice",
            isOpen: true,
            data: {
              title: "게시물을 삭제하시겠어요?",
              message: "지금 나가면 수정 내용이 저장되지 않습니다",
            },
          });
          setDialog(copyDialog);
        }
        return;
      case "fetch":
        await fetchAfterSet();
        reset();
        return;
      default:
        return;
    }
  };

  //fuction
  const fetchAfterSet = async () => {
    if (fileList !== undefined) {
      // firebase에서 url 받아오기
      const urlList = await uploadToFirebase({
        id: cookies.loginId,
        fileList: fileList,
      });

      //업로드
      const upload = await fetch({
        method: "POST",
        url: "/feeds",
        data: {
          feedText: text,
          contentUrls: urlList,
        },
        headers: header,
      });

      if (upload.data?.result.feedId !== undefined) {
        alert("업로드 했습니다.");
      }
    }
  };

  return (
    <MainContainer
      width={nowBoardIndex === 0 ? "656px" : undefined}
      radius="10px"
      height="716px"
      backgroundColor="white"
      onClick={onClickEvent}
    >
      <TitleContainer flex="row_between" padding="15px">
        <Icon width="24px" flex="row">
          {nowBoardIndex > 0 && <Img src={back_icon} id="post_prev" />}
        </Icon>
        <Div width="fit-content">
          <H1
            color="900"
            fontFamily="semiBold"
            fontWeight="600"
            fontSize="large"
            lineHeight="30px"
          >
            새 게시물 만들기
          </H1>
        </Div>
        <Div width="fit-content">
          <Button
            id={nowBoardIndex === 0 ? "post_next" : "fetch"}
            color="blue"
            fontFamily="semiBold"
            fontWeight="600"
            fontSize="medium_large"
            lineHeight="28px"
          >
            {/* 파일이 있다면 다음 표시 */}
            {fileList === undefined
              ? ""
              : fileList.length > 0 && nowBoardIndex !== 1
              ? "다음"
              : "공유"}
          </Button>
        </Div>
      </TitleContainer>
      {/* 첫번째 파일 넣기 */}
      {nowBoardIndex === 0 && <InputFile />}
      {nowBoardIndex === 1 && <InputText />}
    </MainContainer>
  );
};

export default WritePost;
