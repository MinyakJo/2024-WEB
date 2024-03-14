import React from "react";

//component
import Div from "layout/Div";
import TopBar from "components/top_bar/TopBar";
import MainContainer from "components/home_page/MainContainer";

const HomePage = () => {
  return (
    <Div height="100%" backgroundColor="50">
      <TopBar />
      <MainContainer />
    </Div>
  );
};

export default HomePage;
