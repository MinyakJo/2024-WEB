import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { dialogState } from "recoil/dialogAtom";
import CommonStyle from "components/style";
import { useCookies } from "react-cookie";
import { fetch } from "apis/fetch";
import { useNavigate } from "react-router-dom";
import { feedDataListState, selectedFeedIndexState } from "recoil/mainAtom";

//component
import Div from "layout/Div";
import H1 from "layout/H1";
import P from "layout/P";
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

const Notice = ({ children }: { children: any }) => {
  //cookie
  const [cookies] = useCookies(["token"]);
  const header = { Authorization: cookies.token };

  //navigate
  const navigate = useNavigate();

  //recoil
  const reset = useResetRecoilState(dialogState);
  const [feedDataList, setFeedDataList] = useRecoilState(feedDataListState);
  const index = useRecoilValue(selectedFeedIndexState);

  //event
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    switch (id) {
      case "ok":
        reset();
        return;
      case "delete":
        if (index !== undefined && feedDataList !== undefined) {
          const fetchData = await fetch({
            method: "PATCH",
            url: `/feeds/${feedDataList[index].id}/inactive`,
            headers: header,
          });
          if (fetchData.data?.result.feedId) {
            alert("삭제 되었습니다.");
            reset();
            navigate("/");

            const copyList = [...feedDataList];
            copyList.splice(index, 1);
            setFeedDataList(copyList);
          } else alert(fetchData.data);
        }
        return;
      default:
        return;
    }
  };

  return (
    <MainContainer radius="10px" backgroundColor="white" onClick={onClickEvent}>
      <Div padding="40px" paddingBottom="30px">
        {/* 질문 */}
        <Div flex="row_center">
          <H1
            color="900"
            fontSize="medium"
            lineHeight="24px"
            fontWeight="600"
            fontFamily="semiBold"
          >
            {children !== undefined && children?.title !== undefined
              ? children.title
              : ""}
          </H1>
        </Div>
        {/* 설명 */}
        <Div flex="row_center">
          <P color="900" fontSize="medium" lineHeight="24px" fontWeight="500">
            {children !== undefined && children?.message !== undefined
              ? children.message
              : ""}
          </P>
        </Div>
      </Div>
      {/* 버튼 */}
      <ButtonContainer>
        <Button
          color="red"
          fontWeight="600"
          id={
            children !== undefined && children?.id !== undefined
              ? children.id
              : "ok"
          }
        >
          삭제
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button color="black" fontWeight="500" id="cancel">
          취소
        </Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default Notice;
