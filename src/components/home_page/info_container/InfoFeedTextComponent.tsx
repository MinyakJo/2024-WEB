import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  feedDataListState,
  feedLayoutIsOpenState,
  selectedFeedIndexState,
} from "recoil/mainAtom";

//component
import Div from "layout/Div";
import P from "layout/P";
import { createdAtFormat } from "utils/createdAtFormat";

//type
type MainContainerType = {
  opacity?: string;
};

const MainContainer = styled(Div)<MainContainerType>`
  overflow-y: auto;
  max-height: 352px;
  opacity: ${(props) => {
    return props.opacity ? props.opacity : null;
  }};
  transition: opacity 0.5s;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const Text = styled(P)`
  white-space: pre-line;
  word-wrap: break-word;
  cursor: pointer;
`;

const Name = styled.span`
  font-weight: 700;
`;

const InfoFeedTextComponent = () => {
  //recoil
  const feedData = useRecoilValue(feedDataListState);
  const selectedFeedIndex = useRecoilValue(selectedFeedIndexState);
  const isOpen = useRecoilValue(feedLayoutIsOpenState);

  return (
    <MainContainer
      marginTop="10px"
      height={isOpen ? "fit-content" : "0px"}
      radius="10px"
      opacity={isOpen ? "1" : "0"}
      padding={isOpen ? "20px" : "0px 20px"}
      backgroundColor="white"
    >
      <Div flex="row">
        <Text color="900" fontWeight="400" fontSize="small" lineHeight="20px">
          <Name>{`${
            selectedFeedIndex !== undefined
              ? feedData[selectedFeedIndex]?.feedLoginId
              : ""
          } `}</Name>
          {`${
            selectedFeedIndex !== undefined
              ? feedData[selectedFeedIndex].feedText
              : ""
          }`}
        </Text>
      </Div>
      <Div marginTop="2px">
        <P
          color="500"
          fontFamily="regular"
          fontSize="extra_small"
          lineHeight="18px"
          fontWeight="400"
        >
          {selectedFeedIndex !== undefined
            ? createdAtFormat(
                new Date(feedData[selectedFeedIndex].updatedAt as string)
              )
            : ""}
        </P>
      </Div>
    </MainContainer>
  );
};

export default InfoFeedTextComponent;
