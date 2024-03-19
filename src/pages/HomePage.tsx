import React, { useEffect } from "react";
import {
  commentDataListState,
  commentLayoutIsOpenState,
  // feedDataListState,
  feedLayoutIsOpenState,
  isMobileState,
  nowPageNameState,
} from "recoil/mainAtom";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

//component
import Div from "layout/Div";
import MainContainer from "components/home_page/MainContainer";
import MobileBar from "components/mobile_bar/MobileBar";

const HomePage = () => {
  //recoil
  const isMobile = useRecoilValue(isMobileState);
  const setNowPage = useSetRecoilState(nowPageNameState);
  //reset
  // const resetFeedDataList = useResetRecoilState(feedDataListState);
  const resetFeedLayoutIsOpen = useResetRecoilState(feedLayoutIsOpenState);
  const resetCommentLayoutIsOpen = useResetRecoilState(
    commentLayoutIsOpenState
  );
  const resetCommentDataListState = useResetRecoilState(commentDataListState);

  useEffect(() => {
    setNowPage("home");
    return () => {
      // resetFeedDataList();
      resetFeedLayoutIsOpen();
      resetCommentLayoutIsOpen();
      resetCommentDataListState();
    };
  }, [
    // resetFeedDataList,
    resetFeedLayoutIsOpen,
    resetCommentLayoutIsOpen,
    resetCommentDataListState,
  ]);

  return (
    <Div height="100%" backgroundColor="50">
      <MainContainer />
      {isMobile && <MobileBar />}
    </Div>
  );
};

export default HomePage;
