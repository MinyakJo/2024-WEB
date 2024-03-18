import React from "react";
import { isMobileState } from "recoil/mainAtom";
import { useRecoilValue } from "recoil";

//component
import Div from "layout/Div";
import TopBar from "components/top_bar/TopBar";
import MainContainer from "components/home_page/MainContainer";
import MobileBar from "components/mobile_bar/MobileBar";

const HomePage = () => {
  //recoil
  const isMobile = useRecoilValue(isMobileState);

  return (
    <Div height="100%" backgroundColor="50">
      <TopBar />
      <MainContainer />
      {isMobile && <MobileBar />}
    </Div>
  );
};

export default HomePage;
