import React from "react";
import styled from "styled-components";
import CommonStyle from "components/style";
import { useRecoilState } from "recoil";
import { dialogState } from "recoil/dialogAtom";

//component
import Div from "layout/Div";
import Button from "layout/Button";

const MainContainer = styled(Div)`
  max-width: 448px;
  overflow: hidden;
`;
const ButtonContainer = styled(Div)`
  border-top: 1px solid ${CommonStyle.setColor("200")};
  height: 50px;
  button {
    font-size: ${CommonStyle.setFontSize("small")};
    line-height: 20px;
  }
`;

const More = () => {
  //recoil
  const [dialog, setDialog] = useRecoilState(dialogState);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    const copyDialog = [...dialog];

    switch (id) {
      case "notice":
        copyDialog.push({
          type: "notice",
          data: {
            title: "게시물을 삭제하시겠어요?",
            message: "이 게시물을 삭제하시겠어요?",
            id: "delete",
          },
        });
        setDialog(copyDialog);
        return;
      case "edit":
        copyDialog.splice(copyDialog.length - 1, 1, {
          type: "edit",
        });
        setDialog(copyDialog);
        return;
      default:
        return;
    }
  };

  return (
    <MainContainer
      radius="10px"
      borderColor="200"
      backgroundColor="white"
      onClick={onClickEvent}
    >
      {/* 삭제 */}
      <ButtonContainer>
        <Button color="red" fontWeight="600" id="notice">
          삭제
        </Button>
      </ButtonContainer>
      {/* 수정 */}
      <ButtonContainer>
        <Button color="900" fontWeight="500" id="edit">
          수정
        </Button>
      </ButtonContainer>
      {/* 좋아요 수 숨기기 */}
      <ButtonContainer>
        <Button color="900" fontWeight="500">
          좋아요 수 숨기기
        </Button>
      </ButtonContainer>
      {/* 댓글 기능 해제 */}
      <ButtonContainer>
        <Button color="900" fontWeight="500">
          댓글 기능 해제
        </Button>
      </ButtonContainer>
      {/* 게시물로 이동 */}
      <ButtonContainer>
        <Button color="900" fontWeight="500">
          게시물로 이동
        </Button>
      </ButtonContainer>
      {/* 공유 대상... */}
      <ButtonContainer>
        <Button color="900" fontWeight="500">
          공유 대상...
        </Button>
      </ButtonContainer>
      {/* 링크복사 */}
      <ButtonContainer>
        <Button color="900" fontWeight="500">
          링크복사
        </Button>
      </ButtonContainer>
      {/* 퍼가기 */}
      <ButtonContainer>
        <Button color="900" fontWeight="500">
          퍼가기
        </Button>
      </ButtonContainer>
      {/* 취소 */}
      <ButtonContainer>
        <Button color="black" fontWeight="500" id="cancel">
          취소
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default More;
