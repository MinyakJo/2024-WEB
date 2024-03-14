import React from "react";

//component
import Div from "layout/Div";
import FeedImg from "./FeedImg";
import FeedButtonsComponent from "./FeedButtonsComponent";

const FeedComponent = ({ index }: { index: number }) => {
  return (
    <Div
      flex="column_center"
      radius="10px"
      borderColor="200"
      backgroundColor="white"
      marginBottom="20px"
    >
      <FeedImg index={index} />
      <FeedButtonsComponent index={index} />
    </Div>
  );
};

export default FeedComponent;
