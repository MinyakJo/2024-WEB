import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { dialogState } from "recoil/dialogAtom";
import CommonStyle from "components/style";
import WritePost from "./dialog/WritePost";
import Notice from "./dialog/Notice";
import More from "./dialog/More";
import EditPost from "./dialog/EditPost";
import Alert from "./dialog/Alert";

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
  const [dialog, setDialog] = useRecoilState(dialogState);

  //useEffect
  useEffect(() => {
    if (ref.current !== null) ref.current.focus();
  }, []);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;
    if (id === "background" || id === "cancel") {
      const copyDialog = [...dialog];
      copyDialog.splice(copyDialog.length - 1, 1);
      setDialog(copyDialog);
    }
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
            {e.type === "board" ? (
              <WritePost />
            ) : e.type === "notice" ? (
              <Notice>{e?.data}</Notice>
            ) : e.type === "more" ? (
              <More />
            ) : e.type === "edit" ? (
              <EditPost />
            ) : e.type === "alert" ? (
              <Alert>{e?.data}</Alert>
            ) : (
              <></>
            )}
          </MainContainer>
        ))}
    </>
  );
};

export default Dialog;
