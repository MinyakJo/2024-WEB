import React from "react";
import styled from "styled-components";
import CommonStyle from "components/style";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { selectedFeedIndexState } from "recoil/mainAtom";

//component
import FeedImg from "./FeedImg";
import FeedButtonsComponent from "./FeedButtonsComponent";
import FeedCommentComponent from "./FeedCommentComponent";

const FeedContainer = styled.article`
  ${CommonStyle.setFlex("column_center")};
  width: 100%;
  height: fit-content;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid ${CommonStyle.setColor("200")};
  background-color: white;
  margin-bottom: 20px;
`;

const FeedComponent = ({
  children,
  index,
}: {
  children: any;
  index: number;
}) => {
  //navigate
  const navigate = useNavigate();

  //recoil
  const setIndex = useSetRecoilState(selectedFeedIndexState);

  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    const type = id.split("_")[0];

    switch (type) {
      case "to":
        navigate(`board?boardId=${children.id}`);
        setIndex(index);
        return;
      default:
        return;
    }
  };

  return (
    <FeedContainer onClick={onClickEvent}>
      <FeedImg>{children}</FeedImg>
      <FeedButtonsComponent index={index}>{children}</FeedButtonsComponent>
      <FeedCommentComponent index={index}>{children}</FeedCommentComponent>
    </FeedContainer>
  );
};

export default React.memo(FeedComponent);
