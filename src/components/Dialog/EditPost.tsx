import React, { useEffect } from "react";
import styled from "styled-components";
import CommonStyle from "components/style";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { feedDataListState, selectedFeedIndexState } from "recoil/mainAtom";
import {
  boardPreviewListState,
  boardTextState,
  dialogState,
} from "recoil/dialogAtom";
import { fetch } from "apis/fetch";
import { useCookies } from "react-cookie";

//component
import Div from "layout/Div";
import InputText from "./write_post/InputText";
import H1 from "layout/H1";
import Button from "layout/Button";

const MainContainer = styled(Div)`
  max-width: 1008px;
  overflow: hidden;
`;
const TitleContainer = styled(Div)`
  border-bottom: 0.5px solid ${CommonStyle.setColor("300")};
`;

const EditPost = () => {
  //cookie
  const [cookies] = useCookies(["token"]);
  const header = { Authorization: cookies.token };

  //recoil
  const [feedDataList, setFeedDataList] = useRecoilState(feedDataListState);
  const index = useRecoilValue(selectedFeedIndexState);
  const [text, setText] = useRecoilState(boardTextState);
  const setPreview = useSetRecoilState(boardPreviewListState);
  const [dialog, setDialog] = useRecoilState(dialogState);

  const resetPreview = useResetRecoilState(boardPreviewListState);
  const resetText = useResetRecoilState(boardTextState);
  const reset = useResetRecoilState(dialogState);

  //useEffect
  useEffect(() => {
    return () => {
      console.log("reset");
      resetText();
      resetPreview();
    };
  }, [resetText, resetPreview]);

  //useEffect
  useEffect(() => {
    if (index !== undefined && feedDataList !== undefined) {
      if (feedDataList[index]?.feedText !== undefined)
        setText(feedDataList[index].feedText as string);
      if (feedDataList[index]?.contentList !== undefined) {
        const copyImgList = [];

        for (const data of feedDataList[index].contentList) {
          copyImgList.push(data.contentUrl);
        }
        setPreview(copyImgList);
      }
    }
  }, []);

  //event
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    const type = id.split("_")[0];

    switch (type) {
      case "notice":
        const copyDialog = [...dialog];
        copyDialog.push({
          type: "notice",
          data: {
            title: "게시물을 삭제하시겠어요?",
            message: "지금 나가면 수정 내용이 저장되지 않습니다",
          },
        });
        setDialog(copyDialog);
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
    if (
      feedDataList !== undefined &&
      index !== undefined &&
      feedDataList[index]?.id !== undefined
    ) {
      //업로드
      const upload = await fetch({
        method: "PATCH",
        url: `/feeds/${feedDataList[index].id}`,
        data: {
          feedText: text,
        },
        headers: header,
      });

      if (upload.data?.result.feedId !== undefined) {
        alert("수정 했습니다.");

        //복사후 수정
        const copyList = [...feedDataList];
        const copyContent = {
          ...feedDataList[index],
          feedText: text,
        };
        copyList.splice(index, 1, copyContent);

        setFeedDataList(copyList);
      }
    }
  };

  return (
    <MainContainer radius="10px" backgroundColor="white" onClick={onClickEvent}>
      <TitleContainer flex="row_between" padding="15px">
        <Div width="fit-content">
          <Button
            id="notice"
            color="500"
            fontWeight="500"
            fontSize="medium_large"
            lineHeight="28px"
          >
            취소
          </Button>
        </Div>
        <Div width="fit-content">
          <H1
            color="900"
            fontFamily="semiBold"
            fontWeight="600"
            fontSize="large"
            lineHeight="30px"
          >
            정보수정
          </H1>
        </Div>
        <Div width="fit-content">
          <Button
            id="fetch"
            color="blue"
            fontFamily="semiBold"
            fontWeight="600"
            fontSize="medium_large"
            lineHeight="28px"
          >
            완료
          </Button>
        </Div>
      </TitleContainer>
      <InputText />
    </MainContainer>
  );
};

export default EditPost;
