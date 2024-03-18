import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { dialogState } from "recoil/dialogAtom";
import CommonStyle from "components/style";
import WritePost from "./Dialog/WritePost";

//type
type MainContainerType = {
  display?: string;
  padding?: string;
};
const MainContainer = styled.div<MainContainerType>`
  ${CommonStyle.setFlex("row_center")};
  display: ${(props) => {
    return props.display ? props.display : null;
  }};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: ${(props) => {
    return props.padding ? props.padding : null;
  }};
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  z-index: 4;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const Dialog = () => {
  //ref
  const ref = useRef<HTMLDivElement>(null);

  //recoil
  const dialog = useRecoilValue(dialogState);
  const reset = useResetRecoilState(dialogState);

  //useEffect
  useEffect(() => {
    if (ref.current !== null) ref.current.focus();
  }, []);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    if (id === "background") reset();
  };

  return (
    <>
      {dialog &&
        dialog.map((e, i) => (
          <MainContainer
            key={`dialog_${i}`}
            id="background"
            ref={ref}
            tabIndex={-1}
            display={dialog.length > 0 ? "flex" : "none"}
            onClick={onClickEvent}
          >
            {e?.type === "board" ? <WritePost /> : <></>}
          </MainContainer>
        ))}
    </>
  );
};

export default Dialog;
