import React from "react";
import styled from "styled-components";

//component
import Div from "layout/Div";
import FeedImg from "./FeedImg";
import FeedButtonsComponent from "./FeedButtonsComponent";

const FeedContainer = styled(Div)`
  overflow: hidden;
`;

const FeedComponent = ({ index }: { index: number }) => {
  return (
    <FeedContainer
      flex="column_center"
      radius="10px"
      borderColor="200"
      backgroundColor="white"
      marginBottom="20px"
    >
      <FeedImg index={index} />
      <FeedButtonsComponent index={index} />
    </FeedContainer>
  );
};

export default React.memo(FeedComponent);
