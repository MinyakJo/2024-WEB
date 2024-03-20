import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { nowPageNameState } from "recoil/mainAtom";
import useKakao from "utils/useKakao";

const AuthPage = () => {
  //recoil
  const setNowPageName = useSetRecoilState(nowPageNameState);

  useEffect(() => {
    setNowPageName("board");
  }, []);

  useKakao();

  return <></>;
};

export default AuthPage;
